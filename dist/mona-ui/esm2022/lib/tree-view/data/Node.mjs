import { NodeLookupItem } from "./NodeLookupItem";
import { v4 } from "uuid";
export class Node {
    constructor(options) {
        this.uid = v4();
        this.checked = false;
        this.disabled = false;
        this.expanded = false;
        this.focused = false;
        this.indeterminate = false;
        this.nodes = [];
        this.selected = false;
        this.text = "";
        this.checked = options.checked ?? false;
        this.data = options.data;
        this.disabled = options.disabled ?? false;
        this.expanded = options.expanded ?? false;
        this.indeterminate = options.indeterminate ?? false;
        this.key = options.key;
        this.nodes = options.nodes?.map(node => new Node(node)) ?? [];
        this.parent = options.parent;
        this.selected = options.selected ?? false;
        this.text = options.text ?? "";
    }
    anyParentCollapsed() {
        if (this.parent) {
            return !this.parent.expanded || this.parent.anyParentCollapsed();
        }
        return false;
    }
    check(options) {
        this.checked = options.checked;
        if (options.checkChildren) {
            this.nodes.forEach(node => node.check(options));
        }
        if (options.checkParent) {
            const siblings = this.parent?.nodes ?? [];
            const checkedSiblings = siblings.filter(sibling => sibling.checked);
            const indeterminateSiblings = siblings.filter(sibling => sibling.indeterminate);
            const allSiblingsChecked = checkedSiblings.length === siblings.length;
            const someSiblingsChecked = checkedSiblings.length > 0;
            const someSiblingsIndeterminate = indeterminateSiblings.length > 0;
            const parent = this.parent;
            if (parent) {
                parent.indeterminate = !allSiblingsChecked && (someSiblingsChecked || someSiblingsIndeterminate);
                parent.check({ checked: allSiblingsChecked, checkChildren: false, checkParent: true });
            }
        }
    }
    expand(expanded, expandChildren = false) {
        this.expanded = expanded;
        if (expandChildren) {
            this.nodes.forEach(node => node.expand(expanded, expandChildren));
        }
    }
    isDescendantOf(node) {
        if (this.parent) {
            return this.parent === node || this.parent.isDescendantOf(node);
        }
        return false;
    }
    getLookupItem() {
        return new NodeLookupItem(this);
    }
    setSelected(selected) {
        this.selected = selected;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm9kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21vbmEtdWkvc3JjL2xpYi90cmVlLXZpZXcvZGF0YS9Ob2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBZTFCLE1BQU0sT0FBTyxJQUFJO0lBYWIsWUFBbUIsT0FBdUI7UUFaMUIsUUFBRyxHQUFXLEVBQUUsRUFBRSxDQUFDO1FBQzVCLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFFekIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFDekIsa0JBQWEsR0FBWSxLQUFLLENBQUM7UUFFL0IsVUFBSyxHQUFjLEVBQUUsQ0FBQztRQUV0QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLFNBQUksR0FBVyxFQUFFLENBQUM7UUFFckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQztRQUN4QyxJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQztRQUMxQyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLElBQUksS0FBSyxDQUFDO1FBQzFDLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsSUFBSSxLQUFLLENBQUM7UUFDcEQsSUFBSSxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FB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Q0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOb2RlQ2hlY2tPcHRpb25zIH0gZnJvbSBcIi4vTm9kZUNoZWNrT3B0aW9uc1wiO1xuaW1wb3J0IHsgTm9kZUxvb2t1cEl0ZW0gfSBmcm9tIFwiLi9Ob2RlTG9va3VwSXRlbVwiO1xuaW1wb3J0IHsgdjQgfSBmcm9tIFwidXVpZFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5vZGVPcHRpb25zPFQgPSBhbnk+IHtcbiAgICBjaGVja2VkPzogYm9vbGVhbjtcbiAgICBkYXRhPzogVDtcbiAgICBkaXNhYmxlZD86IGJvb2xlYW47XG4gICAgZXhwYW5kZWQ/OiBib29sZWFuO1xuICAgIGluZGV0ZXJtaW5hdGU/OiBib29sZWFuO1xuICAgIGtleTogc3RyaW5nO1xuICAgIG5vZGVzPzogTm9kZU9wdGlvbnM8VD5bXTtcbiAgICBwYXJlbnQ/OiBOb2RlPFQ+O1xuICAgIHNlbGVjdGVkPzogYm9vbGVhbjtcbiAgICB0ZXh0Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgTm9kZTxUID0gYW55PiB7XG4gICAgcHVibGljIHJlYWRvbmx5IHVpZDogc3RyaW5nID0gdjQoKTtcbiAgICBwdWJsaWMgY2hlY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHB1YmxpYyBkYXRhPzogVDtcbiAgICBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwdWJsaWMgZXhwYW5kZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwdWJsaWMgZm9jdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHB1YmxpYyBpbmRldGVybWluYXRlOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHVibGljIGtleTogc3RyaW5nO1xuICAgIHB1YmxpYyBub2RlczogTm9kZTxUPltdID0gW107XG4gICAgcHVibGljIHBhcmVudD86IE5vZGU8VD47XG4gICAgcHVibGljIHNlbGVjdGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHVibGljIHRleHQ6IHN0cmluZyA9IFwiXCI7XG4gICAgcHVibGljIGNvbnN0cnVjdG9yKG9wdGlvbnM6IE5vZGVPcHRpb25zPFQ+KSB7XG4gICAgICAgIHRoaXMuY2hlY2tlZCA9IG9wdGlvbnMuY2hlY2tlZCA/PyBmYWxzZTtcbiAgICAgICAgdGhpcy5kYXRhID0gb3B0aW9ucy5kYXRhO1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gb3B0aW9ucy5kaXNhYmxlZCA/PyBmYWxzZTtcbiAgICAgICAgdGhpcy5leHBhbmRlZCA9IG9wdGlvbnMuZXhwYW5kZWQgPz8gZmFsc2U7XG4gICAgICAgIHRoaXMuaW5kZXRlcm1pbmF0ZSA9IG9wdGlvbnMuaW5kZXRlcm1pbmF0ZSA/PyBmYWxzZTtcbiAgICAgICAgdGhpcy5rZXkgPSBvcHRpb25zLmtleTtcbiAgICAgICAgdGhpcy5ub2RlcyA9IG9wdGlvbnMubm9kZXM/Lm1hcChub2RlID0+IG5ldyBOb2RlKG5vZGUpKSA/PyBbXTtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBvcHRpb25zLnBhcmVudDtcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IG9wdGlvbnMuc2VsZWN0ZWQgPz8gZmFsc2U7XG4gICAgICAgIHRoaXMudGV4dCA9IG9wdGlvbnMudGV4dCA/PyBcIlwiO1xuICAgIH1cblxuICAgIHB1YmxpYyBhbnlQYXJlbnRDb2xsYXBzZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgICAgICAgcmV0dXJuICF0aGlzLnBhcmVudC5leHBhbmRlZCB8fCB0aGlzLnBhcmVudC5hbnlQYXJlbnRDb2xsYXBzZWQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcHVibGljIGNoZWNrKG9wdGlvbnM6IE5vZGVDaGVja09wdGlvbnMpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jaGVja2VkID0gb3B0aW9ucy5jaGVja2VkO1xuICAgICAgICBpZiAob3B0aW9ucy5jaGVja0NoaWxkcmVuKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGVzLmZvckVhY2gobm9kZSA9PiBub2RlLmNoZWNrKG9wdGlvbnMpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5jaGVja1BhcmVudCkge1xuICAgICAgICAgICAgY29uc3Qgc2libGluZ3MgPSB0aGlzLnBhcmVudD8ubm9kZXMgPz8gW107XG4gICAgICAgICAgICBjb25zdCBjaGVja2VkU2libGluZ3MgPSBzaWJsaW5ncy5maWx0ZXIoc2libGluZyA9PiBzaWJsaW5nLmNoZWNrZWQpO1xuICAgICAgICAgICAgY29uc3QgaW5kZXRlcm1pbmF0ZVNpYmxpbmdzID0gc2libGluZ3MuZmlsdGVyKHNpYmxpbmcgPT4gc2libGluZy5pbmRldGVybWluYXRlKTtcbiAgICAgICAgICAgIGNvbnN0IGFsbFNpYmxpbmdzQ2hlY2tlZCA9IGNoZWNrZWRTaWJsaW5ncy5sZW5ndGggPT09IHNpYmxpbmdzLmxlbmd0aDtcbiAgICAgICAgICAgIGNvbnN0IHNvbWVTaWJsaW5nc0NoZWNrZWQgPSBjaGVja2VkU2libGluZ3MubGVuZ3RoID4gMDtcbiAgICAgICAgICAgIGNvbnN0IHNvbWVTaWJsaW5nc0luZGV0ZXJtaW5hdGUgPSBpbmRldGVybWluYXRlU2libGluZ3MubGVuZ3RoID4gMDtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMucGFyZW50O1xuICAgICAgICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICAgICAgICAgIHBhcmVudC5pbmRldGVybWluYXRlID0gIWFsbFNpYmxpbmdzQ2hlY2tlZCAmJiAoc29tZVNpYmxpbmdzQ2hlY2tlZCB8fCBzb21lU2libGluZ3NJbmRldGVybWluYXRlKTtcbiAgICAgICAgICAgICAgICBwYXJlbnQuY2hlY2soeyBjaGVja2VkOiBhbGxTaWJsaW5nc0NoZWNrZWQsIGNoZWNrQ2hpbGRyZW46IGZhbHNlLCBjaGVja1BhcmVudDogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBleHBhbmQoZXhwYW5kZWQ6IGJvb2xlYW4sIGV4cGFuZENoaWxkcmVuOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5leHBhbmRlZCA9IGV4cGFuZGVkO1xuICAgICAgICBpZiAoZXhwYW5kQ2hpbGRyZW4pIHtcbiAgICAgICAgICAgIHRoaXMubm9kZXMuZm9yRWFjaChub2RlID0+IG5vZGUuZXhwYW5kKGV4cGFuZGVkLCBleHBhbmRDaGlsZHJlbikpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGlzRGVzY2VuZGFudE9mKG5vZGU6IE5vZGUpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQgPT09IG5vZGUgfHwgdGhpcy5wYXJlbnQuaXNEZXNjZW5kYW50T2Yobm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRMb29rdXBJdGVtKCk6IE5vZGVMb29rdXBJdGVtPFQ+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBOb2RlTG9va3VwSXRlbSh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0U2VsZWN0ZWQoc2VsZWN0ZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHNlbGVjdGVkO1xuICAgIH1cbn1cbiJdfQ==
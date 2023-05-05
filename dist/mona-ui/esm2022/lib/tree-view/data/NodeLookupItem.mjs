export class NodeLookupItem {
    constructor(node) {
        this.checked = node.checked;
        this.data = node.data;
        this.disabled = node.disabled;
        this.expanded = node.expanded;
        this.indeterminate = node.indeterminate;
        this.key = node.key;
        this.nodes = node.nodes.map(node => new NodeLookupItem(node));
        this.selected = node.selected;
        this.text = node.text;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm9kZUxvb2t1cEl0ZW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tb25hLXVpL3NyYy9saWIvdHJlZS12aWV3L2RhdGEvTm9kZUxvb2t1cEl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsTUFBTSxPQUFPLGNBQWM7SUFVdkIsWUFBbUIsSUFBVTtRQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDNUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDOUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDOUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQzFCLENBQUM7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5vZGUgfSBmcm9tIFwiLi9Ob2RlXCI7XG5cbmV4cG9ydCBjbGFzcyBOb2RlTG9va3VwSXRlbTxUID0gYW55PiB7XG4gICAgcHVibGljIHJlYWRvbmx5IGNoZWNrZWQ6IGJvb2xlYW47XG4gICAgcHVibGljIHJlYWRvbmx5IGRhdGE/OiBUO1xuICAgIHB1YmxpYyByZWFkb25seSBkaXNhYmxlZDogYm9vbGVhbjtcbiAgICBwdWJsaWMgcmVhZG9ubHkgZXhwYW5kZWQ6IGJvb2xlYW47XG4gICAgcHVibGljIHJlYWRvbmx5IGluZGV0ZXJtaW5hdGU6IGJvb2xlYW47XG4gICAgcHVibGljIHJlYWRvbmx5IGtleTogc3RyaW5nO1xuICAgIHB1YmxpYyByZWFkb25seSBub2RlczogTm9kZUxvb2t1cEl0ZW1bXTtcbiAgICBwdWJsaWMgcmVhZG9ubHkgc2VsZWN0ZWQ6IGJvb2xlYW47XG4gICAgcHVibGljIHJlYWRvbmx5IHRleHQ6IHN0cmluZztcbiAgICBwdWJsaWMgY29uc3RydWN0b3Iobm9kZTogTm9kZSkge1xuICAgICAgICB0aGlzLmNoZWNrZWQgPSBub2RlLmNoZWNrZWQ7XG4gICAgICAgIHRoaXMuZGF0YSA9IG5vZGUuZGF0YTtcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IG5vZGUuZGlzYWJsZWQ7XG4gICAgICAgIHRoaXMuZXhwYW5kZWQgPSBub2RlLmV4cGFuZGVkO1xuICAgICAgICB0aGlzLmluZGV0ZXJtaW5hdGUgPSBub2RlLmluZGV0ZXJtaW5hdGU7XG4gICAgICAgIHRoaXMua2V5ID0gbm9kZS5rZXk7XG4gICAgICAgIHRoaXMubm9kZXMgPSBub2RlLm5vZGVzLm1hcChub2RlID0+IG5ldyBOb2RlTG9va3VwSXRlbShub2RlKSk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBub2RlLnNlbGVjdGVkO1xuICAgICAgICB0aGlzLnRleHQgPSBub2RlLnRleHQ7XG4gICAgfVxufVxuIl19
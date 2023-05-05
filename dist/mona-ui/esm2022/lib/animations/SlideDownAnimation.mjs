import { animate, state, style, transition, trigger } from "@angular/animations";
export const SlideDown = trigger("slideDown", [
    transition(":enter", [style({ height: 0, overflow: "hidden" }), animate(100, style({ height: "*" }))]),
    transition(":leave", [animate(100, style({ height: 0 }))])
]);
export const SlideDownHidden = trigger("slideDownHidden", [
    state("true", style({ height: "*", display: "block" })),
    state("false", style({ height: 0, display: "none" })),
    transition("* => *", [animate("200ms ease-in-out")])
]);
export const SlideInOut = trigger("slideInOut", [
    state("true", style({
        height: "0",
        opacity: "0",
        overflow: "hidden"
    })),
    state("false", style({
        height: "*",
        opacity: "1",
        overflow: "visible"
    })),
    transition("true => false", animate("300ms linear")),
    transition("false => true", [style({ overflow: "hidden" }), animate("300ms linear")])
]);
export const SlideIn = trigger("slideIn", [
    state("void", style({ transform: "translate3d(0, 25%, 0) scale(0.9)", opacity: 0 })),
    state("enter", style({ transform: "none", opacity: 1 })),
    state("leave", style({ transform: "translate3d(0, 25%, 0)", opacity: 0 })),
    transition("* => *", animate("400ms cubic-bezier(0.25, 0.8, 0.25, 1)"))
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2xpZGVEb3duQW5pbWF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbW9uYS11aS9zcmMvbGliL2FuaW1hdGlvbnMvU2xpZGVEb3duQW5pbWF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFakYsTUFBTSxDQUFDLE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxXQUFXLEVBQUU7SUFDMUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEcsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQzdELENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxNQUFNLGVBQWUsR0FBRyxPQUFPLENBQUMsaUJBQWlCLEVBQUU7SUFDdEQsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZELEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUNyRCxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztDQUN2RCxDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLFlBQVksRUFBRTtJQUM1QyxLQUFLLENBQ0QsTUFBTSxFQUNOLEtBQUssQ0FBQztRQUNGLE1BQU0sRUFBRSxHQUFHO1FBQ1gsT0FBTyxFQUFFLEdBQUc7UUFDWixRQUFRLEVBQUUsUUFBUTtLQUNyQixDQUFDLENBQ0w7SUFDRCxLQUFLLENBQ0QsT0FBTyxFQUNQLEtBQUssQ0FBQztRQUNGLE1BQU0sRUFBRSxHQUFHO1FBQ1gsT0FBTyxFQUFFLEdBQUc7UUFDWixRQUFRLEVBQUUsU0FBUztLQUN0QixDQUFDLENBQ0w7SUFDRCxVQUFVLENBQUMsZUFBZSxFQUFFLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNwRCxVQUFVLENBQUMsZUFBZSxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7Q0FDeEYsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLEVBQUU7SUFDdEMsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsbUNBQW1DLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDcEYsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3hELEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLHdCQUF3QixFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzFFLFVBQVUsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7Q0FDMUUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYW5pbWF0ZSwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyIH0gZnJvbSBcIkBhbmd1bGFyL2FuaW1hdGlvbnNcIjtcblxuZXhwb3J0IGNvbnN0IFNsaWRlRG93biA9IHRyaWdnZXIoXCJzbGlkZURvd25cIiwgW1xuICAgIHRyYW5zaXRpb24oXCI6ZW50ZXJcIiwgW3N0eWxlKHsgaGVpZ2h0OiAwLCBvdmVyZmxvdzogXCJoaWRkZW5cIiB9KSwgYW5pbWF0ZSgxMDAsIHN0eWxlKHsgaGVpZ2h0OiBcIipcIiB9KSldKSxcbiAgICB0cmFuc2l0aW9uKFwiOmxlYXZlXCIsIFthbmltYXRlKDEwMCwgc3R5bGUoeyBoZWlnaHQ6IDAgfSkpXSlcbl0pO1xuXG5leHBvcnQgY29uc3QgU2xpZGVEb3duSGlkZGVuID0gdHJpZ2dlcihcInNsaWRlRG93bkhpZGRlblwiLCBbXG4gICAgc3RhdGUoXCJ0cnVlXCIsIHN0eWxlKHsgaGVpZ2h0OiBcIipcIiwgZGlzcGxheTogXCJibG9ja1wiIH0pKSxcbiAgICBzdGF0ZShcImZhbHNlXCIsIHN0eWxlKHsgaGVpZ2h0OiAwLCBkaXNwbGF5OiBcIm5vbmVcIiB9KSksXG4gICAgdHJhbnNpdGlvbihcIiogPT4gKlwiLCBbYW5pbWF0ZShcIjIwMG1zIGVhc2UtaW4tb3V0XCIpXSlcbl0pO1xuXG5leHBvcnQgY29uc3QgU2xpZGVJbk91dCA9IHRyaWdnZXIoXCJzbGlkZUluT3V0XCIsIFtcbiAgICBzdGF0ZShcbiAgICAgICAgXCJ0cnVlXCIsXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICAgIGhlaWdodDogXCIwXCIsXG4gICAgICAgICAgICBvcGFjaXR5OiBcIjBcIixcbiAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiXG4gICAgICAgIH0pXG4gICAgKSxcbiAgICBzdGF0ZShcbiAgICAgICAgXCJmYWxzZVwiLFxuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgICBoZWlnaHQ6IFwiKlwiLFxuICAgICAgICAgICAgb3BhY2l0eTogXCIxXCIsXG4gICAgICAgICAgICBvdmVyZmxvdzogXCJ2aXNpYmxlXCJcbiAgICAgICAgfSlcbiAgICApLFxuICAgIHRyYW5zaXRpb24oXCJ0cnVlID0+IGZhbHNlXCIsIGFuaW1hdGUoXCIzMDBtcyBsaW5lYXJcIikpLFxuICAgIHRyYW5zaXRpb24oXCJmYWxzZSA9PiB0cnVlXCIsIFtzdHlsZSh7IG92ZXJmbG93OiBcImhpZGRlblwiIH0pLCBhbmltYXRlKFwiMzAwbXMgbGluZWFyXCIpXSlcbl0pO1xuXG5leHBvcnQgY29uc3QgU2xpZGVJbiA9IHRyaWdnZXIoXCJzbGlkZUluXCIsIFtcbiAgICBzdGF0ZShcInZvaWRcIiwgc3R5bGUoeyB0cmFuc2Zvcm06IFwidHJhbnNsYXRlM2QoMCwgMjUlLCAwKSBzY2FsZSgwLjkpXCIsIG9wYWNpdHk6IDAgfSkpLFxuICAgIHN0YXRlKFwiZW50ZXJcIiwgc3R5bGUoeyB0cmFuc2Zvcm06IFwibm9uZVwiLCBvcGFjaXR5OiAxIH0pKSxcbiAgICBzdGF0ZShcImxlYXZlXCIsIHN0eWxlKHsgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZTNkKDAsIDI1JSwgMClcIiwgb3BhY2l0eTogMCB9KSksXG4gICAgdHJhbnNpdGlvbihcIiogPT4gKlwiLCBhbmltYXRlKFwiNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSlcIikpXG5dKTtcbiJdfQ==
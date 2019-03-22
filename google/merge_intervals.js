 function Interval(start, end) {
     this.start = start;
     this.end = end;
 }
 const intervals = [new Interval(0, 30), new Interval(5, 10), new Interval(15, 20)];
 function merge(intervals) {
     if (!intervals.length) return intervals
     intervals.sort((a, b) => a.start !== b.start ? a.start - b.start : a.end - b.end)
     var prev = intervals[0];
     var result = [prev];
     for (var curr of intervals) {
         if (curr.start <= prev.end) {
            prev.end = Math.max(prev.end, curr.end)
         } else {
            result.push(curr)
            prev = curr;
         }
     }
     return result;
 };
 console.log(merge(intervals));
# youtube-click-tracking
YouTube click tracking no longer uses redirect
### What changed?
YouTube recently updated their click tracking from using a dedicated redirect at  <a href="https://www.youtube.com/redirect?event=Watch_SD_EP&redir_token=QUFFLUhqbUdhSVdBZktYSmR3cVRsS0R6OENvZVMwaWVkZ3xBQ3Jtc0ttQWZOR01tRW15X0NrenpIb1pzc1U1UGdDMlZrdlF4aUpvQzRyTEEwcWhKMHl1WmFYTV91WFhZcmlPSEdiWi1wMlc5VWl3OTg5WGNmMzROSlRUWUJVQmVXOU5kZDV2R1FyeGdDTGMzUWVvMGptU0RGbw&q=https%3A%2F%2Ftwitter.com%2Fgeorainbolt" target="_blank">`https://www.youtube.com/redirect`</a> to <a href="https://github.com/frankiecoots/youtube-click-tracking/blob/main/desktop_polymer.js" target="_blank">`desktop_polymer.js`</a>

#
<a href="https://github.com/frankiecoots/youtube-click-tracking/blob/main/desktop_polymer.js" target="_blank">`desktop_polymer.js`</a>:
```
function uB(a) {
    var b = a.defaultTarget, //
        c = a.elementConfig, //
        d = a.elementsCommand, //
        e = a.skipOnClick, //
        g = a.forceNewState, //
        k = a.additionalCommandArgs, //
        m = a.innertubeCommand || sB(d); //
    if (m) { // 
        a = {}; //
        var p = wnb(m); //
        d = p.navigatingCommand; //
        p = p.href; //
        d && p ? (a.href$ = p, xnb(a, d, p, b), z("web_atagconfig_pointerdown") && ynb(a, d), g && (a["force-new-state$"] = !0)) : (a.role$ = "button", a.href$ = "javascript:void(0);");
        A(m, xYa) && (a["aria-haspopup$"] = !0);
        e || (a.onclick = function(q) { // event is passed to handler
            if (znb(q)) { // check for captured event == left click
                var r = Object.assign({}, { // assign clicked element and event type (click) to  object
                    form: {
                        element: q.target,
                        event: q
                    }
                }, k); // k = a.additionalCommandArgs
                q.preventDefault();
                vB(m, r) // function vB(a,b){Zsa(function(c){b?c.resolveCommand(a,b):c.resolveCommand(a)})} 
                        // This function passes a.innertubeCommand || sB(d); as the first argument and the new object created above as the second argument
                       //  Function h
            }
        });
        return Object.assign({}, c, a) // Return the elementConfig (not sure what this is) and the original event object
    }
}

```

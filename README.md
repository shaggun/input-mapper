# input-mapper 
**internal use only**
[https://shaggun.github.io/input-mapper/](https://shaggun.github.io/input-mapper/)

[Using function-plot](https://www.npmjs.com/package/function-plot)

When I need to map normalized joystick values to different ranges, let's say I want to move my character from idle animation to a running animation. To avoid joystick jitter I will apply the changes considering some deadzone, that means that the character will start to move when the joystick's raw value is greater or equal than 0.1 (10% deadzone) up until 0.9, now imagine that at 0.1 I want to increase the animation speed modifier from 0 to 1 according to the joystick's values considering the deadzones. That leaves me with the following points: (0.1, 0), (0.9, 1)

I can find an equation by calculating the slope and the intercept, that will give me a linear function, which it's enough in most cases. Now, let's say I want some kind of interpolation to smooth out the movement, I start slowly and it speeds up towards the end, I could use a simple quadratic function to do that. These calculations are trivial but it won't hurt saving some minutes to do it.

**Note that the quadratic functions are only valid for half an axis when X starts at 0, if I want to use a function taking both, negative and positive axis values, where -1<=X<=1 I can use a sine function, a cubic function or a linear function**

> A Vue.js project

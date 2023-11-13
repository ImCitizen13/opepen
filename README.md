# Fibonacci grid in ReactJS

## Goal

I want to create a **Fibonacci** grid pattern component in **React** that can the user can use and add elements to in any orientation.

![FibonacciGrid_design.png](Fibonacci%20grid%20in%20ReactJS%20095c7108b71a4f938e58799912521b14/FibonacciGrid_design.png)

## React Component ⚛️

I started by creating a react Component called /code **FibonacciGrid**, then I added a couple of states.

- *Orientation* is an enum that is either **********horizontal********** or ************vertical.************
- *nBoxes* for specifying the number of boxes/elements in the grid *(It should be a multiple of 3)*
- *elementResolution* which holds the width and height of the grid specified by the user.

![Untitled](Fibonacci%20grid%20in%20ReactJS%20095c7108b71a4f938e58799912521b14/Untitled.png)

## Grid vs Flex Layouts

**Grid layout** was my initial choice when I got started with this as it’s called **FibonacciGrid** after all and a grid looks like it’ll be the obvious choice right? … well wrong because for the design that I made, I only needed to worry about 3 elements (Probably could’ve been done easily by grid but I already did something like it with *flex* and I love ❤️ *flex*. So flex is a go; here’s the orientation that I’m aiming for: 

![flexFib.png](Fibonacci%20grid%20in%20ReactJS%20095c7108b71a4f938e58799912521b14/flexFib.png)

I’m going to nest this layout in itself as you can see here:

![recursive_fibView_whirte.png](Fibonacci%20grid%20in%20ReactJS%20095c7108b71a4f938e58799912521b14/recursive_fibView_whirte.png)

You can see how it keeps nesting a new FibView, yeah I’m calling that now. Getting back to what's at hand, if the user sets the number of views/boxes to more than 3 then we’ll have to nest another view and repeat the process.

## Design

![flexDesign.png](Fibonacci%20grid%20in%20ReactJS%20095c7108b71a4f938e58799912521b14/flexDesign.png)

I made this 

![Untitled](Fibonacci%20grid%20in%20ReactJS%20095c7108b71a4f938e58799912521b14/Untitled%201.png)

## Orientation Wars

![Untitled](Fibonacci%20grid%20in%20ReactJS%20095c7108b71a4f938e58799912521b14/Untitled%202.png)

![Untitled](Fibonacci%20grid%20in%20ReactJS%20095c7108b71a4f938e58799912521b14/Untitled%201.png)

Making the view have one behavior is simple enough, but now I need to make it dynamic.

I set up a lot of variables and this function changes the variables on orientation change….

And it worked, for the horizontal view, but not for the Vertical (as expected 🤪).

Here’s how it looked:

![Untitled](Fibonacci%20grid%20in%20ReactJS%20095c7108b71a4f938e58799912521b14/Untitled%203.png)

and thats even after I applied a little bit of react Wizardry.

![Untitled](Fibonacci%20grid%20in%20ReactJS%20095c7108b71a4f938e58799912521b14/Untitled%204.png)

if so then add it to the bottom of the flex row direction, ah yeah I did that too, now I change the *flex-direction* depending on the orientation.

## Need to fix the vertical orientation issue

OMG!!! So I was adding the 1 view to the same flex that contains the other two views, so I ended up with the 3 views with a 37% height and that was the issue.

## Reverse/Flip Orientations

Vertical reverse and horizontal reverse, 

The end result should be like this the one on the figure on the left, after changing a few things I set up the view to change size to a fixed width and height based on its orientation.

![expectedOrientation.png](Fibonacci%20grid%20in%20ReactJS%20095c7108b71a4f938e58799912521b14/expectedOrientation.png)

![ResultReverse.png](Fibonacci%20grid%20in%20ReactJS%20095c7108b71a4f938e58799912521b14/ResultReverse.png)

For some reason, I got the following figures on the right, not the same but close. Now starts the game of trial and error.

### HorizontalReverse

That was an easy one, I just needed to add one line to the condition that adds the large view to the end.

```
{(orientation === OrientationEnum.vertical ||
        orientation === OrientationEnum.horizontalReverse) && (
        <div
```

onto the next one…

### VerticalReverse

Now 

## Orientation Expansion

So as I was figuring out what to do I noticed that I missed a couple of orientations 4 to be exact. I was contemplating whether to implement them now or not as they’ll add an extra level of complexity, knowing me I just had to do it. This btw was a side project of a side project soooooo… let’s get into it. 

I went and added the extra orientations and worked out a nifty new way to figure it all out.

### Flip (the nifty way)

![OriginalViewWithFlip.png](Fibonacci%20grid%20in%20ReactJS%20095c7108b71a4f938e58799912521b14/OriginalViewWithFlip.png)

Now it’s getting complicated, but don’t worry I think I figured a way to simplify things.
I added a new variable *flip* which will just vertically flip all of the original 4 orientations, you can ask me why don’t I make flip-horizontal and flip-vertical, and to that, I say shhhh, not now but that is the future plan. (Something for another day)

## Important Change

As of now most of the views are working well, I thought there should be some style added to them.

I went and downloaded a couple of beautiful images form [Unsplash](https://unsplash.com/photos/a-colorful-mural-on-the-side-of-a-building-3PBKAHfEkxA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) from these amazing artists, check their work in the links below.

Photos by [Freguesia de Estrela](https://unsplash.com/@freguesiadeestrela?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) on [Unsplash](https://unsplash.com/photos/a-colorful-mural-on-the-side-of-a-building-3PBKAHfEkxA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)

Photo by [Milad Fakurian](https://unsplash.com/@fakurian) on [Unsplash](https://unsplash.com/photos/a-colorful-mural-on-the-side-of-a-building-3PBKAHfEkxA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) 

Photo by [Daniel J. SchwarzHire](https://unsplash.com/@danieljschwarz) on 

Photo by [NEOM](https://unsplash.com/@neom) on [Unsplash](https://unsplash.com/photos/a-colorful-mural-on-the-side-of-a-building-3PBKAHfEkxA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)

Photo by [Marek Piwnicki](https://unsplash.com/@marekpiwnicki) on [Unsplash](https://unsplash.com/photos/a-colorful-mural-on-the-side-of-a-building-3PBKAHfEkxA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)

OK, let’s address the elephant in the room 🦣 not you 🐘 yeah you, seriously though we need to now add children to the 

## Onto the Recursion

![recursive_fibView_whirte.png](Fibonacci%20grid%20in%20ReactJS%20095c7108b71a4f938e58799912521b14/recursive_fibView_whirte.png)
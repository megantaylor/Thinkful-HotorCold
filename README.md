Javascript “Hot or Cold” (a.k.a. “Huckle Buckle Beanstalk”)

In this project, starting from scratch you’ll build a JavaScript version of "Hot or Cold" (commonly known as "Huckle buckle beanstalk", obviously!). You remember the game, don't you? The hider knows where one object is, and a seeker has to find it. Each time the seeker makes a guess, the hider responds "getting hotter" if she's getting closer, or "getting colder" if she's moved farther away. For your version of the game, the computer will be hiding a number, and your user will be trying to find it.

To build this game, you should use functions, conditionals, random numbers, and a "scoped" variable as described here. This should help you understand the mindset of a programmer.

1. Starting from scratch, in a brand new repository, create a web page that, when opened, picks a number at random, then asks the user for a guess as to what that number it is. If the user’s guess is too high, too low or just right, tell them. We'll keep things simple in our version of the game: Don't worry about telling users if they're getting "closer" or "further", just whether their last guess was "high" or "low". For your first version, feel free to use the built-in "prompt()" function to ask for the user’s guess, and the “alert()” function to give feedback on that guess.

2. Once you’ve got a working version, push it to Github (and host a version on Github pages) and a share it with your mentor and classmates to get feedback.

3. If you're feeling adventurous, consider adding the following additional features to make the game even more fun:
	*Using another correctly scoped variable, iteratively track the user's previous guess in order to let them know if they are getting “hotter” or “colder”.
        *“prompt()” and “alert()” don’t make for a great user experience, do they? Create an HTML-based interface to replace them. This would reuse some of the ideas introduced in Section 1 of this Unit.
        *If you’re more visual, you can add animations using jQuery.


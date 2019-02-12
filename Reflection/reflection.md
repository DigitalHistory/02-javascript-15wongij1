# Reflection

## Question 1 (50 words)
#### When and why should you use a function like `carefulSubract` rather than `subtract`? 

The function `subtract` although doesn’t actually affect code, it could confuse a person who is coding because it could be easily interpreted in their eyes as an actual subtraction operator, which is shown on JavaScript as a “-“ symbol. A person should use `carefulSubtract` instead because it is less easy to confuse a programmer, and should be used when they are not trying to actually carry out a subtraction function.

## Question 2 (100 words)
#### What are `data types`, and how does data typing work in JavaScript? Name at least 4 built-in data JS data types. 

Data types allow us to operate on variables. It allows computers to figure out what we intend to do with values. In JavaScript, a way that data types can be tested is by using console.log, which helps a programmer to sort out their data. For example, console.log(object(40); would show that the value inputted is a number. Another way that data typing works is that it makes sure that different sorts of data types do not combine with each other. In the variable var datatype = 40 + `school`;, the result will be 40school because they are two different sorts of data, which are number and string respectively. On the other hand, in the variable var datatype = 40 + 20 + `school`;, the result returned will be 60 school because the program recognises that both 40 and 20 are numbers, and adds them together due to the addition operation.

Four built-in data JS data types are: number, string, boolean, and “null” value.

## Question 3 (100 words)
#### What is the advantage to storing information as an object (`{firstName: 'Italo', lastName: 'Calvino', profession: 'novelist' }`) rather than as an array (`['Italo', 'Calvino', 'novelist']`)? Are there any disadvantages?

It should be noted firstly that the two different ways of storing information have no real difference when it is displayed on Javascript. It may be better to store information using the first method because there are labels to help you differentiate what each property means, especially if there are many properties. If there were a long list of properties, all unrelated to each other, listed out in an object using the second method, it can be confusing because you could forget what each property is. However, there are disadvantages to using the first method as well. If there were a long list of properties, and you only needed to know how many properties there were using object.length, it would make more sense to use the second method because it is more efficient and saves time.

## Question 4 (150 words)
#### The function `sentences` transforms a data structure (in this case, a list of object literals) into a sequence of sentences. If the data structure were less predictable (e.g., if some properties of each object were occasionally missing, or if their data type was not always the same), what programming techniques could you use to ensure that your function produced a coherent output? Also, can you think of a more interesting "transform" that could be done with the same data structure?

If data structures were less predictable, it would be preferable to use a loop. This is because loops are conditional. Loops check that if something is on the list or not—If something is on the list and the condition is met, then a specific value is returned. However, if the condition isn’t met, the function moves onto the next condition and returns that specific value and so on. A loop can have as many conditions as it would like, and will return a value each time as long as all conditions required for the loop are listed out.

I would imagine that a programmer could create a game out of the same data structure, and could be used by students who are studying Canadian prime ministers. For example, instead of returning specific sentences, there would be questions asking something like: “Who was the Prime Minister between 1896 and 1911?” The values would be the prime ministers’ names, and the last condition would be if the value was “Wilfred Laurier”. If the student wrote the wrong name (value), the result could return “It wasn’t (value)! Please try again.”, and would return that until the student guesses the right prime minister.
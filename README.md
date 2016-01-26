Sr. Front End Web Designer Crossover Project Evaluation
===

### About the project

I chose to use React as the View Layer since it is a framework I been playing for a while and one which I find very interesting. Other notable libraries used in this project are:

- Twitter Bootstrap 3
    + It is used to facilitate the style of the page.
- RxJS
    + Used to mockup the delivery of data throogh the network. Basically we call the `fetch()` on the `Data` module and it returns a streams of items which will be updated through time randomly. Only three of this items will be being run and it has a 2% chance of failing. If one of the items fails or succeeds the next one starts running. The process stop when all the items are finished.
- hjs-webpack
    + This is a very nice project developed by Henrik Joreteg that simplifies webpack's config. With it I setup my project to Hot-Reload the project on the fly, mantaining the app state, and Stylus as my CSS preprocessor. Also, I added `url-loader` to concatenate some assets. 

### CREDITS

- **Security Wall Free Icon**
    + By: Freepik
    + [Link](http://www.flaticon.com/free-icon/security-wall_75515#term=firewall&page=1&position=5)
- **PC computer with monitor Free Icon**
    + By: SimpleIcon
    + [Link](http://www.flaticon.com/free-icon/pc-computer-with-monitor_34100#term=computer&page=1&position=5)
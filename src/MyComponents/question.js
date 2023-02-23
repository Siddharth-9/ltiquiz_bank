const questions = {
    c1: {
            javascript : [
            {q:'What is the difference between a string and a number in JavaScript?',    a: 'This is C1 javascript answer1', p: <input type="checkbox" />},
            {q:'How do you concatenate string?',                                         a: 'This is C1 javascript answer1', p: <input type="checkbox" />},
            {q:'Explain the use of if/else statements in JavaScript',                    a: 'This is C1 javascript answer1', p: <input type="checkbox" />},
            {q:'What is a ternary operator in JavaScript and how is it used?',           a: 'This is C1 javascript answer1', p: <input type="checkbox" />},
            {q:'How do you create and use a switch statement in JavaScript?',            a: 'This is C1 javascript answer1', p: <input type="checkbox" />},
             ],
        
  
          css: [
            {q:'What is the difference between a relative and an absolute path in CSS?',    a: 'This is C1 css answer1', p: <input type="checkbox" />},
            {q:'How do you link a CSS file to an HTML document?',                           a: 'This is C1 css answer1', p: <input type="checkbox" />},
            {q:'What is the difference between a serif and sans-serif font in CSS?',        a: 'This is C1 css answer1', p: <input type="checkbox" />},
            {q:'How do you change the font size in CSS?',                                   a: 'This is C1 css answer1', p: <input type="checkbox" />},
            {q:'What is the difference between a border and an outline in CSS?',            a: 'This is C1 css answer1', p: <input type="checkbox" />},
         ],

         angular:[
            {q:'Explain the difference between AngularJS and Angular',                                            a: 'This is C1 angular answer1', p: <input type="checkbox" />},
            {q:'How do you create a custom directive in Angular?',                                                a: 'This is C1 angular answer1', p: <input type="checkbox" />},
            {q:'Explain the difference between ngOnChanges, ngOnInit, and ngDoCheck lifecycle hooks in Angular.', a: 'This is C1 angular answer1', p: <input type="checkbox" />},
            {q:'What is dependency injection in Angular and how is it used?',                                     a: 'This is C1 angular answer1',  p: <input type="checkbox" />},
            {q:'How can you use Angular to create a single-page application (SPA)?',                              a: 'This is C1 angular answer1',  p: <input type="checkbox" />},
        ],

       html: [
            {q:'What is HTML and what is it used for?',          a: 'This is C1 html answer1', p: <input type="checkbox" />},
            {q:'What is the purpose of HTML?' ,                  a: 'This is C1 html answer1', p: <input type="checkbox" />},
            {q:'How does HTML structure a website?',             a: 'This is C1 html answer1', p: <input type="checkbox" />},
            {q:'How to create a basic HTML page?',               a: 'This is C1 html answer1',p: <input type="checkbox" />},
            {q:'WWhat are HTML tags and how are they used?',     a: 'This is C1 html answer1', p: <input type="checkbox" />},
        ],
    },


    c2: {
        javascript : [
        {q:'How do you declare a variable in JavaScript and what are the different types of variables?', a: 'This is C2 javascript answer1', p: <input type="checkbox" />},
        {q:'What are the different types of data types in JavaScript?',                                  a: 'This is C2 javascript answer1', p: <input type="checkbox" />},
        {q:'How do you declare and use a function in JavaScript?',                                       a: 'This is C2 javascript answer1', p: <input type="checkbox" />},
        {q:'Explain the difference between for loop and while loop in JavaScript.',                      a: 'This is C2 javascript answer1', p: <input type="checkbox" />},
        {q:'How can you add and remove elements from an array in JavaScript?',                           a: 'This is C2 javascript answer1', p: <input type="checkbox" />},
         ],
    

      css: [
        {q:'How do you center an element horizontally and vertically in CSS?' ,         a: 'This is C2 css answer1', p: <input type="checkbox" />},
        {q:'What is the difference between a class and an ID in CSS?'                  ,a: 'This is C2 css answer1', p: <input type="checkbox" />},
        {q:'How do you use pseudo-classes in CSS?' ,                                    a: 'This is C2 css answer1', p: <input type="checkbox" />},
        {q:'What are the different types of selectors in CSS and how are they used?' ,  a: 'This is C2 css answer1', p: <input type="checkbox" />},
        {q:'How do you change the color of text and background in CSS?' ,               a: 'This is C2 css answer1', p: <input type="checkbox" />},
     ],

     angular:[
        {q:'What is Angular CLI and how is it used to create an Angular project?',              a: 'This is C2 angular answer1', p: <input type="checkbox" />},
        {q:'What is a service in Angular and how is it used?' ,                                 a: 'This is C2 angular answer1', p: <input type="checkbox" />},
        {q:'Explain the concept of data binding in Angular.' ,                                  a: 'This is C2 angular answer1', p: <input type="checkbox" />},
        {q:'How do you implement routing in an Angular application?' ,                          a: 'This is C2 angular answer1', p: <input type="checkbox" />},
        {q:'How can you use Angular forms to create user input fields and validate data?' ,     a: 'This is C2 angular answer1', p: <input type="checkbox" />},
    ],

   html: [
        {q:'Can you explain the use of HTML media elements and what are the different media elements you use?',                  a: 'This is C2 html answer1', p: <input type="checkbox" />},
        {q:'How do you use HTML with CSS and what are the common styles you use with HTML?',                                     a: 'This is C2 html answer1', p: <input type="checkbox" />},
        {q:'Can you explain the use of HTML with JavaScript and what are the common JavaScript techniques you use with HTML?',   a: 'This is C2 html answer1', p: <input type="checkbox" />},
        {q:'How do you use HTML with JSON and what are the common use cases for JSON in HTML?',                                  a: 'This is C2 html answer1', p: <input type="checkbox" />},
        {q:'Can you explain the use of HTML with XML and what are the common use cases for XML in HTML?' ,                       a: 'This is C2 html answer1', p: <input type="checkbox" />},
    ],
},

c3: {
    javascript : [
    {q:'What is the difference between a function expression and a function declaration in JavaScript?', a: 'This is C3 javascript answer1', p: <input type="checkbox" />},
    {q:'How do you create an array in JavaScript and what are the methods associated with it?',          a: 'This is C3 javascript answer1', p: <input type="checkbox" />},
    {q:'Explain the difference between == and === in JavaScript.',                                       a: 'This is C3 javascript answer1', p: <input type="checkbox" />},
    {q:'What is a callback function in JavaScript and how is it used?',                                  a: 'This is C3 javascript answer1', p: <input type="checkbox" />},
    {q:'How can you check if a variable is an array in JavaScript?',                                     a: 'This is C3 javascript answer1', p: <input type="checkbox" />},
     ],

     css: [
    {q:'How do you create a CSS animation and what properties are involved?' ,  a: 'This is C3 css answer1', p: <input type="checkbox" />},
    {q:'Explain the difference between em and rem units in CSS.',               a: 'This is C3 css answer1', p: <input type="checkbox" />},
    {q:'How can you use media queries in CSS to create a responsive design?',   a: 'This is C3 css answer1', p: <input type="checkbox" />},
    {q:'How do you create a CSS gradient?',                                     a: 'This is C3 css answer1', p: <input type="checkbox" />},
    {q:'How do you create a CSS gradient?',                                     a: 'This is C3 css answer1', p: <input type="checkbox" />},
 ],

 angular:[
    {q:'What is a component in Angular and how is it used?',                                    a: 'This is C3 angular answer1', p: <input type="checkbox" />},
    {q:'Explain the use of *ngFor and *ngIf directives in Angular templates.',                  a: 'This is C3 angular answer1', p: <input type="checkbox" />},
    {q:'What is the difference between ngOnChanges and ngDoCheck lifecycle hooks in Angular?' , a: 'This is C3 angular answer1', p: <input type="checkbox" />},
    {q:'How do you use HTTP client in Angular to communicate with a server?' ,                  a: 'This is C3 angular answer1', p: <input type="checkbox" />},
    {q:'What is the difference between ngOnInit and ngOnDestroy lifecycle hooks in Angular?' ,  a: 'This is C3 angular answer1', p: <input type="checkbox" />},
],

html: [
    {q:'Can you explain the use of HTML media elements and what are the different media elements you use?' ,                a: 'This is C3 html answer1', p: <input type="checkbox" />},
    {q:'How do you use HTML with CSS and what are the common styles you use with HTML?',                                    a: 'This is C3 html answer1', p: <input type="checkbox" />},
    {q:'Can you explain the use of HTML with JavaScript and what are the common JavaScript techniques you use with HTML?' , a: 'This is C3 html answer1', p: <input type="checkbox" />},
    {q:'How do you use HTML with JSON and what are the common use cases for JSON in HTML?' ,                                a: 'This is C3 html answer1', p: <input type="checkbox" />},
    {q:'Can you explain the use of HTML with XML and what are the common use cases for XML in HTML?',                       a: 'This is C3 html answer1', p: <input type="checkbox" />},
],          
},

c4: {
    javascript : [
    {q:'What is the difference between call and apply methods in JavaScript?',      a: 'This is C4 javascript answer1', p: <input type="checkbox" />},
    {q:'How do you implement inheritance in JavaScript?',                           a: 'This is C4 javascript answer1', p: <input type="checkbox" />},
    {q:'Explain the concept of hoisting in JavaScript.' ,                           a: 'This is C4 javascript answer1', p: <input type="checkbox" />},
    {q:'What is the difference between null and undefined in JavaScript?',          a: 'This is C4 javascript answer1', p: <input type="checkbox" />},
    {q:'Explain the differences between let, var, and const in JavaScript.',        a: 'This is C4 javascript answer1', p: <input type="checkbox" />},
     ],


  css: [
    {q:'How do you implement responsive design in CSS?',                    a: 'This is C4 css answer1', p: <input type="checkbox" />},
    {q:'What is the difference between padding and margin in CSS?' ,        a: 'This is C4 css answer1', p: <input type="checkbox" />},
    {q:'How do you use CSS grid to create a layout? ' ,                     a: 'This is C4 css answer1', p: <input type="checkbox" />},
    {q:'Explain the concept of flexbox and how it is used for layout.' ,    a: 'This is C4 css answer1', p: <input type="checkbox" />},
    {q:'How can you use CSS variables to make your styles more reusable?' , a: 'This is C4 css answer1', p: <input type="checkbox" />},
 ],

 angular:[
    {q:'How do you create a module in Angular?  ',                                           a: 'This is C4 angular answer1', p: <input type="checkbox" />},
    {q:'How do you use event binding in Angular to respond to user input?' ,                 a: 'This is C4 angular answer1', p: <input type="checkbox" />},
    {q:'How do you use interpolation in Angular to display data in templates?' ,             a: 'This is C4 angular answer1', p: <input type="checkbox" />},
    {q:'What is a pipe in Angular and how is it used?' ,                                     a: 'This is C4 angular answer1', p: <input type="checkbox" />},
    {q:'How do you use Angular CLI to generate components, services, and other artifacts?',  a: 'This is C4 angular answer1', p: <input type="checkbox" />},
],

html: [
    {q:'What are the best practices for writing HTML code?',                                a: 'This is C4 html answer1', p: <input type="checkbox" />},
    {q:'Can you explain the difference between responsive and adaptive design in HTML?',    a: 'This is C4 html answer1', p: <input type="checkbox" />},
    {q:'How to optimize HTML for performance and load times?' ,                             a: 'This is C4 html answer1', p: <input type="checkbox" />},
    {q:'Can you explain the use of HTML with Progressive Web Apps?' ,                       a: 'This is C4 html answer1', p: <input type="checkbox" />},
    {q:'How to use HTML with AR and VR technologies?' ,                                     a: 'This is C4 html answer1', p: <input type="checkbox" />},
],
},

c5: {
    javascript : [
    {q:'What is scope in JavaScript? Explain the different types of scope.',                        a: 'This is C4 javascript answer1', p: <input type="checkbox" />},
    {q:'What is event bubbling and how can it be prevented?',                                       a: 'This is C4 javascript answer1', p: <input type="checkbox" />},
    {q:'What is the difference between asynchronous and synchronous programming in JavaScript?' ,   a: 'This is C4 javascript answer1', p: <input type="checkbox" />},
    {q:'Explain the use of "use strict" in JavaScript.' ,                                           a: 'This is C4 javascript answer1', p: <input type="checkbox" />},
    {q:'What is a closure in JavaScript and how does it work?',                                     a: 'This is C4 javascript answer1', p: <input type="checkbox" />},
    
     ],


  css: [
    {q:'What is the box model in CSS and how does it work?',                                    a: 'This is C4 css answer1', p: <input type="checkbox" />},
    {q:'Explain the difference between inline, block, and inline-block display types in CSS' ,  a: 'This is C4 css answer1', p: <input type="checkbox" />},
    {q:'What are the different types of positioning in CSS and how do they work?' ,             a: 'This is C4 css answer1', p: <input type="checkbox" />},
    {q:'Explain the concept of CSS specificity and how it affects style application. ' ,        a: 'This is C4 css answer1', p: <input type="checkbox" />},
    {q:'What is the CSS cascade and how does it determine which styles are applied?' ,          a: 'This is C4 css answer1', p: <input type="checkbox" />},
 ],

 angular:[
    {q:'How do you use ngIf and ngFor in Angular templates?', a: 'This is C4 angular answer1', p: <input type="checkbox" />},
    {q:'How do you use ngModel in Angular forms to bind data?' ,a: 'This is C4 angular answer1', p: <input type="checkbox" />},
    {q:'How do you use ngClass and ngStyle directives in Angular templates?' ,a: 'This is C4 angular answer1', p: <input type="checkbox" />},
    {q:'What is the purpose of the @Input and @Output decorators in Angular?' ,a: 'This is C4 angular answer1', p: <input type="checkbox" />},
    {q:'What is the purpose of the FormsModule and ReactiveFormsModule modules in Angular?' ,a: 'This is C4 angular answer1', p: <input type="checkbox" />},
],

html: [
    {q:'How do you use HTML with SVG and what are the common use cases for SVG in HTML?',                                    a: 'This is C4 html answer1', p: <input type="checkbox" />},
    {q:'Can you explain the use of HTML with Canvas and what are the common use cases for Canvas in HTML?',                  a: 'This is C4 html answer1', p: <input type="checkbox" />},
    {q:'How do you use HTML with Web Workers and what are the common use cases for Web Workers in HTML?' ,                   a: 'This is C4 html answer1', p: <input type="checkbox" />},
    {q:'Can you explain the use of HTML with Web Components and what are the common use cases for Web Components in HTML?' , a: 'This is C4 html answer1', p: <input type="checkbox" />},
    {q:'How do you use HTML with WebSockets and what are the common use cases for WebSockets in HTML?' ,                     a: 'This is C4 html answer1', p: <input type="checkbox" />},
],
},
}

export default questions



# what-should-i-do

## Purpose

Ever felt you have lots of things to do and often forget some things out of tons of things. Now, with this app, never forget not even a single task and do a single random task suggested by the app from the list of tasks that you have to do. This app selects a random task from list of tasks when you press `Flip the Dice` Button.

## How it works

Event handler is attached to `Flip the Dice` Buttton that sends a request to the server to retreive a random single task from list of tasks saved on the <a href="https://github.com/JasanpreetSidhu/random-task-selector-backend" target="_blank">server</a> and renders that retreived task from the server on the webpage.

## My Path Through Mistakes

1. First, received an error saying server is not configured to receive requests from different domains. followed approach given by the chrome chatbot but it didn't work out as it wasn't for the framework I was using. It was more generic.
2. As I was troubleshooting MS Edge chatbot suggested the right idea and it worked.
3. Second problem, I wasn't parsing the response from server correctly using fetch as I forget a little how to do it exactly. asked co-pilot and it made sense to me. so, implemented it and it worked.
4. Third problem, I was using hyperlink in one of my new task that I added recently. When I started the project, I thought all tasks would be plain text so, created the frontend accordingly. so, hyperlink was showing as plain text not as a link. so, I already knew how to do it exactly and while I was reading the code to make the change, I found I wrote code to render task on webpage in overcomplicated manner. So, ended up simplying the code and displayed the hyperlinks correctly.
5. But there was one caveat, hyperlinks was rendered correctly on most browsers like chrome, brave but not on MS edge because to prevent Cross-site Scripting (XSS) attacks, on MS Edge any data received from servers is rendered as plain text unless the content type from the server is explicitly specified. So, explained the situation to chatbot and asked why it's happening. It suggested the solution and I followed that so server explicitly tells the browser in the response that given content is html. so, tasks are now rendered as html and therefore, hyperlinks are shown as links on the webpage.

## Technical Skills Gained

Learned about connecting to github through ssh, using git,
creating pull request using github cli,
and deploying static websites on GitHub Pages and deploying express app in serverless architecture on Vercel.

## Technologies Used

HTML, Vanilla JS, Express server, Vercel, Node.js

## Next Steps

1. add redis database
2. add form to create new list or add new tasks
3. set CI/CD pipeline with github actions workflows (prompt: How to use CI/CD Pipelines with GitHub Actions to deploy a full-stack express app with frontend in html and vanilla javascript.)
4. style frontend with modern colors and layout
5. responsive to mobile
6. add dark mode
7. keyboard accessible

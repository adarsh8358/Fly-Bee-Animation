🌀 Animated Image Movement with GSAP + React
This is a simple interactive animation project built with React and GSAP using the @gsap/react plugin. It features a flying image that moves randomly across the screen with rotation on every click.

background-image="https://images.unsplash.com/photo-1598368457390-95a84ecb87c4?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"


✨ Features
Smooth animation with GSAP

Click-to-move and rotate image

Responsive design with a styled background

Easy to understand and extend for learning animations in React

📦 Tech Stack
React

GSAP (@gsap/react)

JavaScript

CSS

🚀 Getting Started
Clone the repository:

bash
Copy
Edit
git clone https://github.com/your-username/gsap-fly-animation.git
cd gsap-fly-animation
Install dependencies:

bash
Copy
Edit
npm install
Start the development server:

bash
Copy
Edit
npm start
Click the flying object to see it animate randomly!

📁 File Structure
css
Copy
Edit
src/
├── App.jsx         # Main animation logic
├── index.js        # React entry point
├── App.css         # Styling for background, image, etc.
🧠 How It Works
useGSAP listens for changes in position (xValue, yValue) and rotation (roti).

gsap.to() animates the image using those values.

Clicking on the image triggers moveImage() which:

Generates random X/Y values (with limits)

Updates the state

Triggers animation

📸 Fly Bee png

src="https://imgs.search.brave.com/OL7YxYM3nEJIhR4NQncHKrMAKWQjHoDRJFg70dz77Ss/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YW5pbWF0ZWRpbWFn/ZXMub3JnL2RhdGEv/bWVkaWEvMTk3L2Fu/aW1hdGVkLWZseS1p/bWFnZS0wMDM5Lmdp/Zg.gif"


🛠️ Customization
Want to use a different image? Replace the src in the <img> tag.

Adjust the range of movement by modifying the randomX, randomY, and randomRot values in moveImage().

✅ To-Do Ideas
Add more images that animate on click

Introduce trails or particles with animation

Add sound or feedback on image movement

📄 License
MIT — feel free to use, modify, or share this project.

Let me know if you want this converted into a real README.md file or deployed live.

Also, if you're planning to publish it on GitHub, share your repo name, and I can help format it with badges, links, etc.
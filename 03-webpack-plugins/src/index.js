import createHeading from './heading.js'
import './main.css'
import footerHteml from './footer.html'
import icon from './icon.png'
const heading = createHeading()

document.body.append(heading)
const img = new Image()
img.src = icon
document.body.append(img)
document.write(footerHteml)

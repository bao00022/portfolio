Final Project – Web Portfolio

# Echo of Design Portfolio Website

## Design
- [Figma Design File](https://www.figma.com/design/Wjf198qQQYdlQP3jcRpOWr/Hi-Fi-Wireframes---Template?node-id=0-1&p=f&t=3ujT1EJr7IPk798R-0)
  - Contains the original design mockups
  - Includes mobile, tablet, and desktop layouts
  - Shows the design system and components


## Resources Used
### Fonts
- [Cormorant](https://fonts.google.com/specimen/Cormorant) from Google Fonts
  - Used as the primary display font for headings
  - Imported via: `<link href="https://fonts.googleapis.com/css2?family=Cormorant&display=swap" rel="stylesheet">`

 ### CSS Libraries
- [Bootstrap](https://getbootstrap.com/) - Main CSS framework
- [Animate.css](https://animate.style/) - Animation library
  - Used for various page animations:
    - `animate__fadeIn` for smooth content appearance
    - `animate__fadeInLeft` for text sliding in from left
    - `animate__bounce` for attention-grabbing elements
  - Imported via: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">`


### Icons
- Social media icons are exported as SVG from [Font Awesome](https://fontawesome.com/)
  - Facebook, Instagram, and TikTok icons
  - Used as static SVG files rather than Font Awesome library


### Image Credits
The design and coding images in the portfolio section are sourced from [Pixabay](https://pixabay.com/).


## Development Notes
### Learning Bootstrap
One of the biggest challenges I faced during the development process was breaking away from my habit of writing traditional CSS and adapting to Bootstrap's system. At first, I found it difficult to rely on Bootstrap classes instead of custom CSS. To overcome this, I started referring to the official Bootstrap documentation before building each module, aiming to fully understand the built-in utilities and reduce my use of manual CSS.

### Layout Comparison
This approach helped me a lot, especially with layout structures like Flexbox and columns. I actually built two versions—one using Flex manually, and another using Bootstrap's grid system—and the comparison made me realize how powerful and efficient Bootstrap's column system can be when used properly.

### Design Approach
In terms of design thinking, although I started from a mobile-first approach as usual, this time I became more aware of the importance of considering mobile and tablet layouts simultaneously. Thinking about both early on helped me make better decisions that work across different screen sizes.


## Key Features
- Responsive design that works across all device sizes
- Bootstrap-based grid system for efficient layouts
- Mobile-first approach with tablet consideration
- Optimized image loading for different screen sizes
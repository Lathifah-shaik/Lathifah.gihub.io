/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

import image from "../images/projects-background.jpg";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Todos Application",
    description:
      "A simple Todos Application to manage the daily tasks. Can delete the respective todo after completion of the task",
    url: "https://lathifahtodo.ccbp.tech/",
  },
  {
    title: "Wikipedia Application",
    description:
      "A simple application similar to wikipedia, Developed using HTML, CSS, Bootstrap and Javascript",
    url: "https://lathiwikipedia.ccbp.tech/",
  },
  {
    title: "Google Suggestion Application",
    description: "A simple application similar to Google search Suggestioin system using React.js",
    url: "https://latgooglesug.ccbp.tech/",
  },
  {
    title: "Letter counter using React.js",
    description:
      "A letter counter application where while writing the text in the input field the letter count is automatically updated",
    url: "https://latlettercount.ccbp.tech/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <img className="background" src={image} alt="" />
      <h2 style={{ textAlign: "center" }}>Projects</h2>
      <div style={{ display: "flex", flexDirection: "column", paddingTop: "3rem" }}>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

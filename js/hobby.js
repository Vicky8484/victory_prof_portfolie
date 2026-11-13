const projects = [
  {
    title: "Onclick",
    url: "https://vicky8484.github.io/spil_site/",
    order: 1,
    color: "bg-hobby-1",
  },
  {
    title: "Quiz",
    url: "https://vicky8484.github.io/gaet-min-mening/",
    order: 2,
    color: "bg-hobby-2",
  },
  {
    title: "Spotify",
    url: "https://venerable-brioche-562cee.netlify.app/",
    order: 3,
    color: "bg-hobby-3",
    description: "Bare en øvelse med Spotify-layout!!!",
  },
  {
    title: "Brødrene Kviste",
    url: "https://vicky8484.github.io/brodrene_kviste/",
    order: 4,
    color: "bg-hobby-4",
  },
  {
    title: "Flex-scroll",
    url: "https://vicky8484.github.io/flex-info/",
    order: 5,
    color: "bg-hobby-5",
  },
  {
    title: "Reci-peace",
    url: "https://vicky8484.github.io/reci-peace/",
    order: 6,
    color: "bg-hobby-6",
  },
  {
    title: "Recipuro",
    url: "https://vicky8484.github.io/recipuro/",
    order: 7,
    color: "bg-hobby-7",
  },
  {
    title: "One Stop Shop",
    url: "https://vicky8484.github.io/1-stop-shop-updated/",
    order: 8,
    color: "bg-hobby-8",
  },
  {
    title: "Desktop Portfolio",
    url: "https://vicky8484.github.io/desktop_pf/",
    order: 9,
    color: "bg-hobby-9",
  },
  {
    title: "Grid/Flex Library",
    url: "https://vicky8484.github.io/gridflex_library/",
    order: 10,
    color: "bg-hobby-10",
  },
  {
    title: "Cool side",
    url: "https://vicky8484.github.io/coolside/",
    order: 11,
    color: "bg-hobby-11",
  },
  {
    title: "wind in my Tail",
    url: "https://vicky8484.github.io/tailwind/",
    order: 12,
    color: "bg-hobby-12",
  },
  {
    title: "Courage's Crochets",
    url: "https://couragescrochets-lg7d.vercel.app/",
    order: 13,
    color: "bg-hobby-13",
  },
  {
    title: "Jungle",
    url: "https://junglesvg.netlify.app/",
    order: 14,
    color: "bg-hobby-14",
  },
];

const projectList = document.querySelector("#hobbyProjects");
const projectSort = document.querySelector("#projectSort");

function renderProjects(sortOrder) {
  const sortedProjects = [...projects].sort((first, second) =>
    sortOrder === "newest"
      ? second.order - first.order
      : first.order - second.order,
  );

  projectList.replaceChildren();

  sortedProjects.forEach((project, index) => {
    const textFirst = index % 2 === 0;
    const isLast = index === sortedProjects.length - 1;
    const boxType = textFirst
      ? isLast
        ? "rounded-tl-box"
        : "rounded-tl-box rounded-bl-box"
      : isLast
        ? "rounded-tr-box"
        : "rounded-tr-box rounded-br-box";
    const article = document.createElement("article");
    article.className = "flex max-[800px]:w-full";

    const textBox = document.createElement("div");
    textBox.className =
      "flex-[2] py-8 flex flex-col items-center justify-center text-center gap-4 max-[800px]:min-w-0 max-[800px]:p-4";

    const title = document.createElement("h3");
    title.textContent = project.title;
    textBox.append(title);

    if (project.description) {
      const description = document.createElement("p");
      description.className =
        "p-4 w-[50ch] text-center max-[800px]:w-full max-[800px]:max-w-full";
      description.textContent = project.description;
      textBox.append(description);
    }

    const link = document.createElement("a");
    link.href = project.url;
    const button = document.createElement("button");
    button.className =
      "bg-cta-secondary text-header-text hover:bg-accent-hover hover:text-header-text";
    button.textContent = "Webside";
    link.append(button);
    textBox.append(link);

    const colorBox = document.createElement("div");
    colorBox.className = `h-[400px] flex-1 overflow-hidden transition-[background-color] duration-[5000ms] hover:bg-accent max-[800px]:min-w-0 ${project.color} ${boxType}`;

    if (textFirst) {
      article.append(textBox, colorBox);
    } else {
      article.append(colorBox, textBox);
    }

    projectList.append(article);
  });
}

projectSort.addEventListener("change", () => {
  renderProjects(projectSort.value);
});

renderProjects(projectSort.value);

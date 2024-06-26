# Vue.js Study Repository

Welcome to the Vue.js Study Repository! This repository is a collection of notes, code snippets, projects, and resources to help you learn and master Vue.js. Whether you are a beginner or looking to deepen your understanding, this repo aims to provide valuable content to aid your learning journey.

## Table of Contents

1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
3. [Repository Structure](#repository-structure)
4. [Resources](#resources)
5. [Contributing](#contributing)
6. [License](#license)

## Introduction

Vue.js is a progressive JavaScript framework for building user interfaces. It is designed to be incrementally adoptable, with a core library focused on the view layer only. This repository will guide you through the fundamental concepts and advanced techniques used in Vue.js development.

## Getting Started

To get started with this repository, clone it to your local machine:

```bash
git clone https://github.com/LewisDamy/vuejs-study-repo.git
cd vuejs-study-repo
```

Make sure you have Node.js and npm (or yarn) installed on your system. If not, download and install them from [Node.js](https://nodejs.org/).

### Running the vue-study-app

1. Project setup

```bash
npm install
```

2. Compiles and hot-reloads for development

```bash
npm run serve
```

## Repository Structure

The repository is organized as follows:

```
vuejs-study-repo/
│
├── basics/
│   ├── 01-hello-world/
│   ├── 02-event-starting/
│   ├── 03-data-binding/
│   ├── 04-dynamic-styling/
│   └── 05-conditional-rendering/
│
├── vue-study-app/
│   ├── src/
│   │   └── components/
│   │       ├── FriendExample/
│   │       │   ├── App.vue
│   │       │   └── FriendContact.vue
│   │       │   └── main.js
│   │       ├── KnowledgeExample/
│   │       │   ├── ActiveElement.vue
│   │       │   ├── App.vue
│   │       │   ├── KnowledgeBase.vue
│   │       │   ├── KnowledgeElement.vue
│   │       │   ├── KnowledgeGrid.vue
│   │       │   └── main.js
│   │       ├── BadgeExample/
│   │       │   ├── BadgeList.vue
│   │       │   ├── BaseBadge.vue
│   │       │   ├── BaseCard.vue
│   │       │   ├── CourseGoals.vue
│   │       │   ├── TheHeader.vue
│   │       │   ├── UserInfo.vue
│   │       │   └── main.js
│   │       └── SurveyExample/
│   │           ├── survey/
│   │           │   ├── LearningSurvey.vue
│   │           │   ├── SurveyResult.vue
│   │           │   └── UserExperiences.vue
│   │           ├── UI/
│   │           │   ├── BaseButton.vue
│   │           │   └── BaseCard.vue
│   │           ├── App.vue
│   │           └── main.js
│   ├── .eslintrc.json
│   ├── .gitignore
│   ├── .babel.config.js
│   ├── package-lock.json
│   └── package.json
│
├── advanced/
│   ├── 01-forms/
│   ├── 01-server-side-rendering/
│   ├── 01-vue-router/
│   ├── 01-animations-transitions/
│   ├── 02-vuex/
│   ├── 02-vue-and-authentication/
│   └── 03-composition-api/
│
├── public/
│   └── images/
│
├── .gitignore
├── LICENSE
└── README.md
```

### Folders

- `TBD`: To be done.
<!--
- `basics/`: Fundamental concepts and simple examples.
- `components/`: Working with components, props, events, and more.
- `advanced/`: Advanced topics such as state management with Vuex, routing with Vue Router, and server-side rendering.
- `public/`: Public assets used in examples and projects. -->
- `FriendExample/`: props (parent => child communication, validation, supported values, dynamic values), custom events (child => parent communication, validation), emit
- `KnowledgeExample/`: Provide + Inject (functions, methods)
- `BadgeExample/`: Global & Local components, Slots (named, styles, scoped)
- `GoalsExample/`: Dynamic Components, Teleporting elements, fragments
- `SurveyExample/`: HTTP Requests using fetch function (POST, GET), error handling, loading status message

## Resources

Here are the main resources:

- [Vue - The Complete Guide (incl. Router & Composition API)](https://www.udemy.com/course/vuejs-2-the-complete-guide/)
- [Vue.js Official Documentation](https://vuejs.org/v2/guide/)
- [Vue Router Documentation](https://router.vuejs.org/)
- [Vuex Documentation](https://vuex.vuejs.org/)
- [Vue.js Style Guide](https://vuejs.org/v2/style-guide/)
- [Awesome Vue.js](https://github.com/vuejs/awesome-vue) - A curated list of awesome things related to Vue.js.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a pull request

## License

This repository is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

---

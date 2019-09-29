<template>
  <div>
    <header class="header">
      <div class="container">
        <div class="header__container">
          <div>
            <h1 class="header__title">vue-octicons</h1>
            <p class="header__subtitle">
              <a href="https://octicons.github.com/" class="header__link"
                >GitHub Octicons</a
              >
              packaged as Vue components.
            </p>
          </div>

          <a href="https://github.com/brattonross/vue-octicons">
            <mark-github-icon size="3x" style="color: #eee" />
          </a>
        </div>
      </div>
    </header>

    <main>
      <div class="container">
        <h3>Install</h3>
        <div class="install__container">
          <pre><code>{{ installCommand }}</code></pre>

          <button class="button" @click="copyInstallCommand">
            <clippy-icon size="1.5x" />
          </button>
        </div>

        <div class="search__container">
          <input
            v-model.trim="search"
            type="text"
            class="search__input"
            placeholder="Search Octicons"
          />
        </div>

        <div class="icons">
          <div v-for="icon in filteredIcons" :key="icon" class="icon">
            <component :is="icon" class="icon__icon" :width="iconWidth(icon)" />
            <span class="icon__title">{{ icon }}</span>
          </div>
        </div>
      </div>
    </main>

    <footer class="footer">
      <div class="container">
        <div class="footer__text">
          &copy; {{ year }} Made with <heart-icon class="footer__heart" /> by
          <a href="https://github.com/brattonross" class="footer__link">
            Ross Bratton
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import * as icons from '../index';

export default {
  name: 'App',

  components: {
    ...icons
  },

  data() {
    return {
      icons: Object.keys(icons),
      installCommand: 'npm install @brattonross/vue-octicons',
      search: '',
      year: new Date().getFullYear()
    };
  },

  computed: {
    filteredIcons() {
      const text = this.search.toLowerCase();
      if (!text) {
        return this.icons;
      }

      return this.icons.filter(icon => icon.toLowerCase().includes(text));
    }
  },

  methods: {
    copyInstallCommand() {
      navigator.clipboard.writeText(this.installCommand);
    },

    iconWidth(icon) {
      switch (icon) {
        case 'LogoGistIcon':
          return 16 * 1.5625 + 'px';
        case 'LogoGithubIcon':
          return 16 * 2.8125 + 'px';
        default:
          return null;
      }
    }
  }
};
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
}

body {
  font: normal normal 16px/1.6 'Helvetica Neue', helvetica, arial, sans-serif;
  background-color: #fafafa;
}

.header {
  background: linear-gradient(150deg, #1d2671 25%, #c33764 94%);
  color: #eee;
  padding: 3rem 0;
  margin-bottom: 2rem;
}

.header__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__title {
  margin-top: 0;
  margin-bottom: 0.5rem;
}

.header__subtitle {
  margin: 0;
}

.header__link {
  color: #eee;
  font-weight: 600;
  text-decoration: none;
}

.container {
  width: 928px;
  padding: 0 40px;
  margin: 0 auto;
}

.search__container {
  display: flex;
}

.search__input {
  flex: 1;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  padding: 0.75rem 1rem;
}

.icons {
  display: flex;
  flex-wrap: wrap;
  margin-right: -10px;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.icon {
  flex: 1 0 25%;
  display: flex;
  align-items: center;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  background-color: white;
  margin-right: 10px;
  margin-bottom: 10px;
}

.icon:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.icon__icon {
  margin-right: 0.75rem;
}

.footer {
  background: white;
  padding: 2rem 0;
}

.footer__text {
  display: flex;
  align-items: center;
}

.footer__heart {
  color: red;
  margin: 0 0.2rem;
}

.footer__link {
  margin-left: 0.25em;
  text-decoration: none;
  color: #333;
  font-weight: 600;
}

pre {
  margin: 0;
}

pre code {
  background: #eee;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
}

.install__container {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
}

.button {
  background: white;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  padding: 0.3rem 0.5rem;
  margin-left: 0.5rem;
  cursor: pointer;
}
</style>

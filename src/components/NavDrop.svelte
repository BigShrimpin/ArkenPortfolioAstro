<script lang="ts">
  import { fly } from 'svelte/transition';
  let isOpen = false;
  function toggleVisibility() {
    console.log(isOpen)
    isOpen = !isOpen;
    console.log(isOpen)
  };
  let screenSize;
</script>

<svelte:window bind:innerWidth={screenSize} />
<button on:click={toggleVisibility} class="dropdown-toggle">
  <span class="icon-wrapper">
    <span class="icon-bar"></span>
    <span class="icon-bar"></span>
    <span class="icon-bar"></span>
  </span>
</button>
{#if isOpen}
  <div id="dropdown-menu" in:fly="{{ y: -200, duration: 500 }}" out:fly="{{y: -200, duration: 800 }}">
    <ul class="dropdown-links">
      <li class="dropdown-item">
        <a href="../about" class="dropdown-link">
          <span>ABOUT</span>
        </a>
      </li>
      <li class="dropdown-item">
        <a href="../" class="dropdown-link">
          <span>PROJECTS</span>
        </a>
      </li>
      <li class="dropdown-item">
        <a href="../about" class="dropdown-link">CONTACT</a>
      </li>
      <button on:click={toggleVisibility} class="dropdown-toggle" aria-expanded={isOpen}>
        <span class="icon-wrapper">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </span>
      </button>
    </ul>
  </div>
{/if}

<style>
#dropdown-menu {
  position: fixed;
  height: 150px;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 2px solid var(--border-color);
  transition: .8s ease;
}

.dropdown-links {
  list-style: none;
  background-color: var(--background-color);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  font-size: x-large;
  width: 100%;
  height: 100%;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.3);
}

.dropdown-item {
  width: 200px;
  font-weight: 400;
  height: 72.5px;
  border-radius: 5px;
  transition: .5s ease;
}

.dropdown-item:hover {
  background-color: var(--background-contrast-color);
}

.dropdown-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: inherit;
  height: inherit;
}

.dropdown-toggle {
  cursor: pointer;
  border: none;
  background-color: transparent;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  font-size: 1.5rem;
}

.dropdown-toggle[aria-expanded='true'] .icon-bar:is(:first-child, :last-child) {
  position: absolute;
  margin: 0px;
  width: 30px;
}

.dropdown-toggle[aria-expanded='true'] .icon-bar:first-child {
  transform: rotate(-45deg) translateX(-2px);
}

.dropdown-toggle[aria-expanded='true'] .icon-bar:nth-child(2) {
  opacity: 0;
}

.dropdown-toggle[aria-expanded='true'] .icon-bar:last-child {
  transform: rotate(45deg) translateY(-6px) translateX(-8px);
}

.icon-bar {
  display: block;
  width: 25px;
  height: 4px;
  margin: 4px;
  background-color: var(--text-color);
}
</style>
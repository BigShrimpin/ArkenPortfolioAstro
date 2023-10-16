<script lang="ts">

</script>

<button class="wheel left">
    <i class="fa-solid fa-arrow-left-long"></i>
</button>
<button class="wheel right">
    <i class="fa-solid fa-arrow-right-long"></i>
</button>

<style>
.left,
.right {
  flex-grow: 1;
  border: 0;
  border-left: 2px solid var(--border-color);
}

.wheel {
  background-color: transparent;
  color: var(--text-color);
  font-size: 4rem;
  cursor: pointer;
  position: relative;
}

.wheel::before {
  background: radial-gradient(
    800px circle at var(--mouse-x) var(--mouse-y),
    rgba(255, 255, 255, 0.2),
    transparent 40%
  );
  content: "";
  height: 100%;
  opacity: 0;
  transition: opacity 500ms;
  left: 0px;
  position: absolute;
  top: 0px;
  width: 100%;
  z-index: 2;
}

.wheel:hover::before {
  opacity: 1;
}
</style>
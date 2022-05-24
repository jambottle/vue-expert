<template>
  <section class="form-wrapper">
    <form class="form">
      <div>
        <label class="form__label" for="title">Title: </label>
        <input class="form__input" id="title" type="text" />
      </div>
      <div>
        <label class="form__label" for="content">Content: </label>
        <textarea class="form__input" id="content" type="text" rows="5" />
      </div>
      <button class="form__button" type="submit">Post Now</button>
    </form>
  </section>
</template>

<style lang="scss" scoped>
.form-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  margin: 40px auto;
  border-radius: 3px;
  padding: 15px 20px;

  background-color: #ffffff;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.08);
  -webkit-box-shadow: 0 20px 20px rgba(0, 0, 0, 0.08);

  .form {
    width: 100%;
    height: 100%;

    &__label {
      display: block;
      width: 100%;
      margin-bottom: 0.5rem;
      color: #364f6b;
      font-size: 90%;
    }

    &__input {
      width: 100%;
      margin-bottom: 1rem;
      border: 1px solid #dae1e7;
      padding: 0.5rem 0.75rem;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      font-family: inherit;
      font-size: 100%;
    }

    &__button {
      border: 0 solid #dae1e7;
      border-radius: 0.25rem;
      padding: 0.5rem 1.5rem;
      background-color: #fe9616;
      color: #ffffff;
      font-weight: 700;
      cursor: pointer;

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
  }
}
</style>

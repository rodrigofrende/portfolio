<template>
  <div
    class="
      grid grid-cols-12
      bg-transparent
      border-2
      rounded-xl
      my-6
      dark:border-orange-dark
    "
  >
    <div class="col-span-12 text-cente">
      <div class="md:flex p-8">
        <img
          id="start"
          class="
            w-40
            h-40
            mx-auto
            md:w-60 md:h-60 md:mx-5
            rounded-full
            animate__animated
            animate__rotateInDownLeft
            animate__delay-1s
            animate__slow
          "
          src="@/assets/heroSend.png"
          alt="dev path picture"
        />
        <div
          class="
            pt-6
            md:px-8
            text-center
            md:text-left
            space-y-4
            dark:text-white
          "
        >
          <blockquote>
            <p
              class="
                text-2xl
                pb-5
                font-bold
                animate__animated animate__backInDown
              "
            >
              Hello !
            </p>
            <p
              class="
                text-lg
                font-semibold
                animate__animated
                animate__fadeIn
                animate__delay-1s
                animate__slow
              "
            >
              My name is Rodrigo. I am 26 and i am a software developer from
              Argentina.
            </p>
            <p
              class="
                py-6
                text-lg
                font-semibold
                animate__animated
                animate__fadeIn
                animate__delay-3s
                animate__slow
              "
            >
              I love technology and to be constantly learning things, also i am
              a musician and like taking photos.
            </p>
          </blockquote>
        </div>
      </div>
    </div>

    <div class="col-span-12 text-center">
      <div class="px-8">
        <div
          class="
            pt-2
            md:px-8
            text-center
            md:text-left
            space-y-4
            dark:text-white
          "
        >
          <blockquote>
            <p
              class="
                text-lg
                font-semibold
                animate__animated animate__delay-4s animate__fadeIn
              "
            >
              I know a lot about this technologies:
            </p>
          </blockquote>
          <div
            class="
              font-medium
              mx-5
              flex
              justify-evenly
              animate__animated animate__delay-4s animate__fadeIn
            "
          >
            <img
              class="w-10 h-10 md:w-20 md:h-20"
              src="@/assets/js.png"
              alt="JavaScript"
            />
            <img
              class="w-10 h-10 md:w-20 md:h-20"
              src="@/assets/html5.png"
              alt="HTML5"
            />
            <img
              class="w-10 h-10 md:w-20 md:h-20"
              src="@/assets/vue.png"
              alt="Vue js"
            />
            <img
              class="w-10 h-10 md:w-20 md:h-20"
              src="@/assets/css.png"
              alt="CSS"
            />
            <img
              class="w-10 h-10 md:w-20 md:h-20"
              src="@/assets/mysql.png"
              alt="My SQL"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="col-span-12 text-center">
      <div class="px-8">
        <div
          class="pt-6 md:p-8 text-center md:text-left space-y-4 dark:text-white"
        >
          <blockquote>
            <p
              class="
                text-lg
                font-semibold
                animate__animated animate__delay-5s animate__fadeIn
              "
            >
              I use the coolest tools:
            </p>
          </blockquote>
          <div
            class="
              font-medium
              mx-5
              flex
              justify-evenly
              animate__animated animate__delay-5s animate__fadeIn
            "
          >
            <img
              class="w-8 h-8 md:w-16 md:h-16"
              src="@/assets/vuetify.png"
              alt="Vuetify"
            />
            <img
              class="w-8 h-8 md:w-16 md:h-16"
              src="@/assets/tailwind.svg"
              alt="Tailwind CSS"
            />
            <img
              class="w-8 h-8 md:w-14 md:h-14"
              src="@/assets/bootstrap.png"
              alt="Bootstrap"
            />
            <img
              class="w-8 h-8 md:w-14 md:h-14"
              src="@/assets/github.png"
              alt="Git"
            />
            <img
              class="w-8 h-8 md:w-14 md:h-14"
              src="@/assets/azure.png"
              alt="Azure"
            />
            <img
              class="w-8 h-8 md:w-14 md:h-14"
              src="@/assets/netlify.png"
              alt="Netlify CI/CD"
            />
            <img
              class="w-8 h-8 md:w-16 md:h-16"
              src="@/assets/node-js.png"
              alt="Node JS"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="col-span-12 text-center">
      <div class="px-8">
        <div
          class="pt-6 md:py-10 text-center md:text-left space-y-4 dark:text-white"
        >
          <blockquote>
            <p
              class="
                text-lg
                font-semibold
                text-center
                animate__animated animate__delay-5s animate__slideInLeft
              "
            >
              Now you know me, tell me something about you at:
            </p>
          </blockquote>
          <div
            class="
              font-medium
              mx-5
              flex
              justify-center
              animate__animated animate__delay-5s animate__slideInRight
            "
          >
            <img
              class="
                w-8
                h-8
                md:w-10 md:h-10
                mx-5
                transform
                duration-100
                hover:scale-125 hover:bg-opacity-25
              "
              src="@/assets/linkedin.png"
              alt="LinkedIn"
            />
            <img
              class="
                w-8
                h-8
                md:w-10 md:h-10
                mx-5
                transform
                duration-100
                hover:scale-125 hover:bg-opacity-25
              "
              src="@/assets/mail.png"
              alt="Email me"
            />
            <img
              class="
                w-8
                h-8
                md:w-10 md:h-10
                mx-5
                transform
                duration-100
                hover:scale-125 hover:bg-opacity-25
              "
              src="@/assets/github-bottom.png"
              alt="My Github"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    debugger;
    window.scrollTo({ top: 100, behavior: "smooth" });
  },
  methods: {},
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Style+Script&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap");
.title {
  font-family: "Abril Fatface", cursive;
  letter-spacing: 5px;
}
.cursive-subtitle {
  font-family: "Style Script", cursive;
}
</style>

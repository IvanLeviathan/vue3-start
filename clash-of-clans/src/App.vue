<template>
  <div class="wrapper">
    <Header/>
    <div class="wrapper-content">
      <div class="container">
        <router-view/>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
// import {site} from "@/_config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default {
  components: {Header,Footer}
};
</script>




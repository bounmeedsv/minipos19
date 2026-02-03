<template lang="">
   <!-- Menu -->

<aside id="layout-menu" class="layout-menu menu-vertical menu bg-menu-theme">
  
  <div class="app-brand demo ">
    <a href="index.html" class="app-brand-link">
      <span class="app-brand-logo demo">
<span class="text-primary">

 
</span>
</span>
    
    </a>
    <a href="javascript:void(0);" class="layout-menu-toggle menu-link text-large ms-auto">
      <i class="bx bx-chevron-left d-block d-xl-none align-middle"></i>
    </a>
  </div>

  
  <div class="menu-divider mt-0  "></div>

  <div class="menu-inner-shadow"></div>

  <ul class="menu-inner py-1">
    
    <!-- {{$route}} -->
    <li class="menu-item" :class="$route.path=='/store'?'active':''">
      <router-link to="/store" class="menu-link">
       <i class='menu-icon bx bxs-store-alt'></i>
        <div class="text-truncate" data-i18n="Dashboards">ສະຕ໋ອກສິນຄ້າ</div>
      </router-link>    
    </li>

<li class="menu-item" :class="$route.path=='/pos'?'active':''">
      <router-link to="/pos"  class="menu-link">
       <i class='menu-icon bx bx-cart-add' ></i>
        <div class="text-truncate" data-i18n="Dashboards">ຂາຍ POS</div>
      </router-link>    
    </li>

    <li class="menu-item" :class="$route.path=='/Transection'?'active':''">
      <router-link to="/Transection" class="menu-link">
        <i class='menu-icon bx bxs-detail'></i>
        <div class="text-truncate" data-i18n="Dashboards">ການເຄື່ອນໄຫວ</div>
      </router-link>    
    </li>

    <li class="menu-item" :class="$route.path=='/report'?'active':''">
      <router-link to="/report" class="menu-link">
     <i class='menu-icon bx bxs-file'></i>
        <div class="text-truncate" data-i18n="Dashboards">ລາຍງານ</div>
      </router-link>    
    </li>
    <!-- Layouts -->
    

   
  </ul>
</aside>
<!-- / Menu -->
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>
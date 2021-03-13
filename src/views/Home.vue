<template>
  <ContentFluit title="Dashboard vue v3"> 
    <template #content>
      <div class="row">
        <div class="col-5">
          <adm-card>
            <template #header>
              <h1 class="card-title">Title Card</h1>
            </template>
            <template #body>
                GOGOGO
            </template>
          </adm-card>
        </div>
      </div>
      
    </template>
  </ContentFluit>
</template>

<script>
// @ is an alias to /src
 
export default {
  name: 'Home',
  components: {   
  }
}
</script>

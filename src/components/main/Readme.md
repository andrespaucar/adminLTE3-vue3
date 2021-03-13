## MAIN LAYOUTS

### MainHeader
```html
<MainHeaderComponent variant="success">
    <template #navbar-left>
      <li class="nav-item d-none d-sm-inline-block">
        <a href="index3.html" class="nav-link">Home</a>
      </li>
    </template>
</MainHeaderComponent>
```


### MainSidebar
```html
<MainSidebarComponent variant="light-success" variant-brand='dark'>
    <template #brand>

    </template>
    <template #user-panel>
      <div class="image d-flex align-items-center">
        <img src="assets/dist/img/user2-160x160.jpg" class="img-circle elevation-1" alt="User Image">
      </div>
      <div class="info">
        <a href="#" class="d-block">Andres Paucar</a>
        <small class="text-success">Administrador</small>
      </div>
    </template>
    <template #sidebar-menu>
      <menu-simple label="Home" icon="home" to="/"/>
      <menu-full label="MFull" icon="box">
        <menu-simple label="Usuarios" to="/users" type="far" />
      </menu-full>
    </template>
</MainSidebarComponent>
```
- MENU
    - Simple
    - Full
```html
<menu-simple label="Home" icon="home" to="/"/>

<menu-full label="MFull" icon="box">
    <menu-simple label="Usuarios" to="/users" type="far" />
</menu-full>
```

- CONTENT
```html
<ContentFluit>
  <template #title>
    <h1 class="m-0 text-dark">Dashboard v3</h1> 
  </template>
  <template #breadcrumb>
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active">Dashboard v3</li>
  </template>
  <template #content>
    <div class="row">
      <div class="col-5">
        <div class="card">
          <div class="card-body">GOGOGO</div>
        </div>
      </div>
    </div>
  </template>
</ContentFluit>
```
<script>

    // Circular progress used on main page when data is loading
    import { ProgressCircular, MaterialApp } from 'svelte-materialify';
</script>
  
<MaterialApp>
  <div class="d-flex justify-center">
    <ProgressCircular size={50} indeterminate color="primary" />
  </div>
</MaterialApp>
<template>
  <div class="hello">
    <h1>DMS Vue Application</h1>
    <table>
    <tr>
      <th>Customer Number</th>
      <th>Deduction Status</th>
      <th>Deduction Type</th>
      <th>Is Active</th>
    </tr>
    <tr>
      <td><a href="http://localhost:9000/cls" target="" rel="noopener">1234</a></td>
      <td>In process</td>
      <td>NA</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td><a href="http://localhost:9000/cls" target="" rel="noopener">5678</a></td>
      <td>Closed</td>
      <td>NA</td>
      <td>No</td>
    </tr>
    <tr>
      <td><a href="http://localhost:9000/cls" target="" rel="noopener">9811</a></td>
      <td>Paid</td>
      <td>NA</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td><a href="http://localhost:9000/cls" target="" rel="noopener">1112</a></td>
      <td>Rejected</td>
      <td>NA</td>
      <td>No</td>
    </tr>
  </table>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

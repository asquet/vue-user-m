<template>
  <div>
    <h2> Roles List </h2>
    <entry-list entries="roles" :entries="roles">
      <tr slot="header">
        <td>ID</td>
        <td>Name</td>
      </tr>
      <template slot="item" scope="props">
        <tr @click="$router.push({name: 'Role Edit', params: {role_id: props.item.id} })">
          <td>
            {{ props.item.id }}
          </td>
          <td>
            {{ props.item.name }}
          </td>
        </tr>
      </template>
    </entry-list>
  </div>
</template>

<script>
  import EntryList from '../common/EntryList';

  export default {
    data: () => ({
      roles: [{
        id: 1,
        name: 'role 1',
      }, {
        id: 2,
        name: 'role 2',
      }],
    }),
    components: {
      'entry-list': EntryList,
    },
  };

</script>

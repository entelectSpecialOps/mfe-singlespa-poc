<script setup lang="ts">
import { useState } from "#app";

const user = useState("user");
</script>
<template>
    <div>
        Hello from React App
        <section>
            <custom-greeting :token="user.id" :name="user.username"></custom-greeting>
        </section>
    </div>
</template>
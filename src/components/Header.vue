<template>
    <div class="header">
        <div class="header-container">
            <div class="header-title">
                <span class="header-title-text">evip</span>
            </div>
            <div class="links-container">
                <div class="links">
                    <a href="https://twitter.com/evipepota">Twitter</a>
                    <a href="https://github.com/evipepota">github</a>
                    <router-link to="/ctf">ctf</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    background-color: #ffc3ed;
    padding: 1.5rem;
    border-radius: 30px;
}

.header-title {
    flex-shrink: 0;
    color: #ffffff;
    margin-right: 1.5rem;
}

.header-title-text {
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 2rem;
    letter-spacing: -0.025em;
}

.links-container {
    width: 100%;
    display: block;
    flex-grow: 1;
}

.links a {
    display: block;
    color: #ffffff;
    margin-right: 3rem;
}

.links a:hover {
    color: #115e59;
}

@media (min-width: 1024px) {
    .links-container {
        display: flex;
        align-items: center;
        width: auto;
    }

    .links a {
        display: inline-block;
    }
}
</style>
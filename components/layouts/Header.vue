<template>
  <header
    class="sticky z-40 top-0 bg-background/80 backdrop-blur-lg border-b border-border"
  >
    <div class="container flex h-14 max-w-screen-2xl items-center">
      <div class="mr-4 md:mr-1 hidden md:flex">
        <a
          href="/"
          class="mr-4 md:mr-2 lg:mr-6 flex items-center lg:space-x1 xl:space-x-2"
        >
          <img src="/main-logo.png" style="width: 40px; height: 40px" />
          <span class="font-bold"> 키워드에그 </span>
        </a>
        <nav
          class="flex items-center max-lg:space-x-4 space-x-6 text-sm font-medium"
        >
          <!-- <a
            href="/docs/introduction"
            class="transition-colors hover:text-foreground/80 text-foreground/60"
            >Docs
          </a>
          <a
            href="/docs/components/accordion"
            class="transition-colors hover:text-foreground/80 text-foreground/60"
            >Components
          </a>
          <a
            href="/themes"
            class="transition-colors hover:text-foreground/80 text-foreground/60"
            >Themes
          </a>
          <a
            href="/examples/mail"
            class="transition-colors hover:text-foreground/80 text-foreground/60"
            >Examples
          </a>
          <a
            href="/blocks"
            class="transition-colors hover:text-foreground/80 text-foreground/60"
            >Blocks
          </a>
          <a
            href="https://github.com/radix-vue/shadcn-vue"
            target="_target"
            class="transition-colors hover:text-foreground/80 text-foreground/60 hidden lg:block"
            >GitHub</a
          > -->
        </nav>
      </div>
      <div
        class="flex flex-1 items-center justify-between space-x-2 md:justify-end"
      >
        <!-- <div class="relative w-full max-w-sm items-center">
          <Input
            id="search"
            type="text"
            placeholder="키워드 입력"
            v-model="keyword"
            @keyup.enter="doSearch()"
          />
          <span
            class="absolute end-0 inset-y-0 flex items-center justify-center px-2"
          >
            <Search class="size-6 text-muted-foreground" />
          </span>
        </div> -->

        <nav class="flex items-center">
          <Button @click="toggleTheme()" variant="ghost" size="icon">
            <Icon
              :icon="
                colorMode.preference === 'dark'
                  ? 'radix-icons:sun'
                  : 'radix-icons:moon'
              "
              class="w-4 h-4"
            />
          </Button>
          <NuxtLink to="/login">
            <Button variant="ghost" size="icon">
              <Icon icon="radix-icons:person" class="w-4 h-4" />
            </Button>
          </NuxtLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Search } from 'lucide-vue-next';
import { Input } from '@/components/ui/input';

const colorMode = useColorMode();

const toggleTheme = () => {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark';
};
</script>

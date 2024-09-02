<template>
  <div class="mt-4 w-screen-2xl">
    <div class="relative w-full max-w-sm float-right items-center">
      <Input
        id="search"
        type="text"
        placeholder="키워드 입력"
        v-model="keyword"
        @keydown.enter="doSearch"
      />
      <span
        class="absolute end-0 inset-y-0 flex items-center justify-center px-2"
      >
        <Search class="size-6 text-muted-foreground" />
      </span>
    </div>
    <div class="clear"></div>
    <Table>
      <TableHeader class="sticky top-0">
        <TableRow>
          <TableHead class="cursor-pointer" @click="sort('keyword')"
            >키워드</TableHead
          >
          <TableHead>
            <TooltipProvider>
              <Tooltip @click="sort('pc')">
                <TooltipTrigger>PC 검색수</TooltipTrigger>
                <TooltipContent>
                  <p>
                    최근 한달간 네이버를 이용한 사용자가 해당 키워드를 검색한
                    횟수입니다.(통합검색 기준)
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </TableHead>
          <TableHead @click="sort('mobile')">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>MOBILE 검색수</TooltipTrigger>
                <TooltipContent>
                  <p>
                    최근 한달간 네이버를 이용한 사용자가 해당 키워드를 검색한
                    횟수입니다.(통합검색 기준)
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </TableHead>
          <TableHead @click="sort('total')">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>TOTAL</TooltipTrigger>
                <TooltipContent>
                  <p>PC + MOBILE</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </TableHead>
          <TableHead>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>예상 유입수</TooltipTrigger>
                <TooltipContent>
                  <p>첫 페이지에 내 글이 검색 시 유입되는 방문 예측 수</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </TableHead>

          <TableHead @click="sort('pcClickCnt')">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>PC 클릭수</TooltipTrigger>
                <TooltipContent>
                  <p>
                    최근 한 달 간 사용자가 해당 키워드를 검색했을 때, 통합검색
                    영역에 노출된 광고가 받은 평균 클릭수 입니다.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </TableHead>
          <TableHead @click="sort('mobileClickCnt')">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>MOBILE 클릭수</TooltipTrigger>
                <TooltipContent>
                  <p>
                    최근 한 달 간 사용자가 해당 키워드를 검색했을 때, 통합검색
                    영역에 노출된 광고가 받은 평균 클릭수 입니다.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </TableHead>
          <TableHead @click="sort('pcCtr')">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>PC 클릭률</TooltipTrigger>
                <TooltipContent>
                  <p>
                    최근 한 달간 해당 키워드로 통합검색 영역에 노출된 광고가
                    받은 평균 클릭률을 의미합니다.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </TableHead>
          <TableHead @click="sort('mobileCtr')">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>MOBILE 클릭률</TooltipTrigger>
                <TooltipContent>
                  <p>
                    최근 한 달간 해당 키워드로 통합검색 영역에 노출된 광고가
                    받은 평균 클릭률을 의미합니다.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </TableHead>
          <TableHead>경쟁도</TableHead>
          <TableHead class="cursor-pointer" @click="sort('updated')"
            >최근 검색시간</TableHead
          >
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="(item, index) in items" :key="index">
          <TableCell class="hover:underline font-bold text-emerald-400">
            <!-- <a
              :href="`https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=${encodeURIComponent(item.keyword)}`"
              target="_blank"
              >{{ item.keyword }}</a
            > -->
            <NuxtLink :to="`/stat/${item.keyword}`">{{ item.keyword }}</NuxtLink>
          </TableCell>
          <TableCell>{{ formatNumberWithCommas(item.pc) }}</TableCell>
          <TableCell>{{ formatNumberWithCommas(item.mobile) }}</TableCell>
          <TableCell class="font-bold">{{
            formatNumberWithCommas(item.total)
          }}</TableCell>
          <TableCell>{{
            formatNumberWithCommas(Math.floor(item.total / 30))
          }}</TableCell>
          <TableCell>{{ formatNumberWithCommas(item.pcClickCnt) }}</TableCell>
          <TableCell>{{
            formatNumberWithCommas(item.mobileClickCnt)
          }}</TableCell>
          <TableCell>{{ formatNumberWithCommas(item.pcCtr) }}</TableCell>
          <TableCell>{{ formatNumberWithCommas(item.mobileCtr) }}</TableCell>
          <TableCell>{{ item.complex }}</TableCell>
          <TableCell>{{ item.updated }}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
</template>
<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { Search } from 'lucide-vue-next';
import { Input } from '@/components/ui/input';

import { CaretSortIcon, ChevronDownIcon } from '@radix-icons/vue';

import axios from 'axios';
import { formatNumberWithCommas } from '~/utils';

const config = useRuntimeConfig();

const items = ref([]);
const keyword = ref('');
const sortToggle = ref(true);

const getKeywordList = async () => {
  const url = `${config.public.API_URL}/keywordegg/getKeywordList`;
  const { data } = await axios.get(url);
  items.value = data;
};

const doSearch = async (event) => {
  if (!event.isComposing && keyword.value) {
    // 한글 두 번 눌리는 경우 바지
    const url = `${config.public.API_URL}/keywordegg/getKeywordList?keyword=${keyword.value}`;
    const { data } = await axios.get(url);
    items.value = data;
  }
};
const sort = (name) => {
  if (name === 'keyword' || name === 'updated') {
    if (sortToggle.value) {
      items.value.sort((a, b) => a[name].localeCompare(b[name]));
    } else {
      items.value.sort((a, b) => b[name].localeCompare(a[name]));
    }
  } else {
    if (sortToggle.value) {
      items.value.sort((a, b) => b[name] - a[name]);
    } else {
      items.value.sort((a, b) => a[name] - b[name]);
    }
  }
  sortToggle.value = !sortToggle.value;
};

onMounted(() => {
  getKeywordList();
});
</script>

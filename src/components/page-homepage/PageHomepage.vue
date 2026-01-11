<style scoped>
a.link > i {
  margin-right: 0.5rem;
}
</style>

<template>
  <main class="responsive">
    
    <div class="space"></div>

    <article class="primary medium-width medium-elevate center">
      <div class="row">
        <div class="center-align left-margin">
          <img class="round extra border tertiary-border"
               src="https://avatars.githubusercontent.com/u/13001378?v=4"
               alt="GitHub avatar">
          <div class="bold">
            Firok
          </div>
        </div>

        <div class="max small-padding">
          <div class="tiny-padding">
            <h5>Arc Island</h5>
            <div>
              互联网的犄角旮旯之一
            </div>
            <div>
              有一点东西, 但不多
            </div>
            <div class="overline">
              虽然不知道你是从哪找到这破地方的, 总之欢迎你
            </div>
          </div>
        </div>
      </div>

    </article>

    <article class="fill medium-width medium-elevate center">
      <div class="small-padding horizontal-padding">
        <div class="small-text center-align">
          还可以在这里找到我
        </div>

        <div class="tiny-space"></div>

        <div class="small-width center">
          <a class="link"
             href="mailto:firok@qq.com"
             target="_blank">
            <i class="tiny">
              <mail-outlined/>
            </i>
            E-Mail
          </a>
        </div>

        <div class="small-width center">
          <a class="link"
             href="tencent://message/?uin=351768593&Site=&Menu=yes"
             target="_blank">
            <i class="tiny">
              <qq-circle-filled/>
            </i>
            QQ
          </a>
        </div>

        <div class="small-width center">
          <a class="link"
             href="https://github.com/FirokOtaku"
             target="_blank">
            <i class="tiny">
              <github-filled/>
            </i>
            GitHub
          </a>
        </div>

        <div class="small-width center">
          <a class="link"
             href="https://steamcommunity.com/id/s2lab_firok/"
             target="_blank">
            <i class="tiny" v-html="SteamSvg.default">
            </i>
            Steam
          </a>
        </div>

        <div class="tiny-space"></div>
      </div>

      <hr>

      <div class="small-padding">

      </div>
    </article>

    <article class="fill medium-width medium-elevate center center-align">

      <a href="https://icp.gov.moe/?keyword=20231551">
        <div class="small-text">
          <img class="tiny" src="/moe-icp-mark.png" alt="Moe ICP logo">
          萌ICP备20231551号
        </div>
      </a>

    </article>

  </main>
</template>

<script setup lang="ts">

import * as SteamSvg from '../../assets/steam-1.svg?raw'

import {
  QqCircleFilled,
  GithubFilled,
  MailOutlined,
} from '@ant-design/icons-vue'


</script>

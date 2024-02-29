import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.zhihu.android',
  name: '知乎',
  deprecatedKeys: [0, 1, 2, 3, 4, 5, 7, 8, 9],
  groups: [
    {
      key: 6,
      name: '分段广告-信息流广告',
      desc: '点击关闭-点击内容不感兴趣',
      activityIds: [
        'com.zhihu.android.mixshortcontainer.MixShortContainerActivity',
        'com.zhihu.android.app.ui.activity.HostActivity',
        'com.zhihu.android.feature.short_container_feature.ui.ShortContainerHostActivity',
        'com.zhihu.android.ContentActivity',
        'com.zhihu.android.app.ui.activity.MainActivity',
      ],
      rules: [
        {
          key: 0,
          quickFind: true,
          matches: '@ImageView[clickable=true] -n [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13849671',
        },
        {
          key: 1,
          matches:
            '@ImageView[id=null][clickable=true] -2 ViewGroup > [text$="广告"]',
          exampleUrls:
            'https://m.gkd.li/57941037/f6498773-af55-4ba9-96fa-4c0597523d55',
          snapshotUrls: [
            'https://i.gkd.li/i/12647525',
            'https://i.gkd.li/i/14178516', //activityId: com.zhihu.android.feature.short_container_feature.ui.ShortContainerHostActivity
          ],
        },
        {
          key: 2,
          quickFind: true,
          matches: '@ImageView[clickable=true] -(2,3) * > [text*="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13849442',
            'https://i.gkd.li/i/14178979',
          ],
          exampleUrls:
            'https://m.gkd.li/57941037/65e9f31a-e80f-4996-9621-1b8fd92940d6',
        },
        {
          key: 3,
          quickFind: true,
          matches: '@ViewGroup[clickable=true] <4 * -3 * >2 [text*="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/14192451',
        },
        {
          key: 4,
          quickFind: true,
          activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
          matches:
            '[vid="dot_text_layout"] + [vid="menu_container"] > [vid="menu"]',
          exampleUrls:
            'https://m.gkd.li/57941037/689c77eb-9026-44db-b22e-d890961a0ad6',
          snapshotUrls: 'https://i.gkd.li/i/14321041',
        },
        {
          key: 90,
          preKeys: [0, 1, 2, 3, 4],
          quickFind: true,
          matches: '@[clickable=true] >3 [text$="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/13849689',
        },
      ],
    },
    {
      enable: false,
      key: 10,
      name: '通知提示-推送通知弹窗',
      desc: '点击x按钮',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches:
            '[id="com.zhihu.android:id/guide_title"] - [id="com.zhihu.android:id/guide_image_exit"][clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/25cfef06-fe50-4250-bf45-1f6210f95063',
          snapshotUrls: 'https://i.gkd.li/i/12647583',
        },
      ],
    },
    {
      enable: false,
      key: 11,
      name: '全屏广告-会员页面月卡红包',
      desc: '点击关闭',
      rules: [
        {
          activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
          matches:
            'RelativeLayout[childCount=2] > ImageView[index=1][clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/335dee89-4b55-40f1-8316-b7b4f86a8ee6',
          snapshotUrls: 'https://i.gkd.li/i/12647421',
        },
      ],
    },
    {
      key: 12,
      name: '全屏广告-会员页面广告弹窗',
      desc: '点击关闭',
      rules: [
        {
          activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
          matches:
            '[id="com.zhihu.android:id/image"] < RelativeLayout + [id="com.zhihu.android:id/dismiss"]',
          exampleUrls:
            'https://m.gkd.li/57941037/9eb78a95-c2dc-4a8b-9b86-f9d0fc0ed6fd',
          snapshotUrls: 'https://i.gkd.li/i/12707676',
        },
      ],
    },
    {
      key: 13,
      name: '局部广告-搜索栏上方广告',
      desc: '点击关闭',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
          matches: '[vid="ad_container"] [vid="img_close_focus"]',
          exampleUrls:
            'https://m.gkd.li/101449500/11c26ab8-0b01-4345-8ea8-d4e97233b723',
          snapshotUrls: 'https://i.gkd.li/i/14156887',
        },
      ],
    },
    {
      key: 14,
      name: '局部广告-信息流广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          activityIds:
            'com.zhihu.android.feature.short_container_feature.ui.ShortContainerHostActivity',
          matches:
            'ViewGroup > TextView[text!=""][index=1] +(2,3) ImageView[clickable=true][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/0443d5cb-aa24-4447-afd7-58c5a09af835',
          snapshotUrls: [
            'https://i.gkd.li/i/14178980',
            'https://i.gkd.li/i/14206949',
            'https://i.gkd.li/i/14232195', // text="创作者小助手"
            'https://i.gkd.li/i/14235024', // text="知乎游戏"
          ],
        },
        {
          key: 1,
          quickFind: true,
          activityIds:
            'com.zhihu.android.feature.short_container_feature.ui.ShortContainerHostActivity',
          matches:
            '@ImageView[clickable=true][visibleToUser=true] + * > [text*="广告"]',
          exampleUrls:
            'https://m.gkd.li/45487685/c7d89c48-91d1-4658-b22e-d2626117be8b',
          snapshotUrls: 'https://i.gkd.li/i/14206988',
        },
        {
          key: 2,
          activityIds: [
            'com.zhihu.android.mix.activity.ContentMixProfileActivity',
            'com.zhihu.android.mixshortcontainer.MixShortContainerActivity',
          ],
          matches: '[text*="广告"] +(1,2) [text="×"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14220104',
            'https://i.gkd.li/i/14421277',
          ],
        },
        {
          key: 3,
          activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
          quickFind: true,
          matches: '@[vid="menu"][visibleToUser=true] < * - * > [text^="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/14296163',
        },
        {
          key: 4,
          activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
          quickFind: true,
          matches: '@ViewGroup[clickable=true] <3 * < * -2 * >2 [text$="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/14332161',
        },
        {
          key: 5,
          activityIds:
            'com.zhihu.android.mixshortcontainer.MixShortContainerActivity',
          matches:
            'View[childCount=3] > @Image[index=1][clickable=true][visibleToUser=true] + [text$="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/14391614',
        },
      ],
    },
    {
      key: 15,
      name: '局部广告-悬浮小广告',
      rules: [
        {
          key: 0,
          name: '发现页面-右侧年卡折扣悬浮窗',
          activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
          quickFind: true,
          matches: '@[vid="activity_close"] + * > [vid="activity_img"]',
          snapshotUrls: 'https://i.gkd.li/i/14296251',
        },
      ],
    },
    {
      key: 16,
      name: '更新提示',
      matchTime: 10000,
      quickFind: true,
      resetMatch: 'app',
      actionMaximum: 1,
      rules: [
        {
          key: 0,
          name: '勾选[不再提醒]',
          matches: 'CheckBox[text="不再提醒"][checked=false][clickable=true]', // checked=false 区别勾选前后
          exampleUrls:
            'https://m.gkd.li/57941037/728ea1cd-ca19-4de9-9e7e-eb2a3513f965',
          snapshotUrls: [
            'https://i.gkd.li/i/14445502', // 勾选前
            'https://i.gkd.li/i/14445815', // 勾选后
          ],
        },
        {
          preKeys: 0,
          key: 1,
          name: '点击[取消]',
          matches: '@[text="取消"] + [text="去应用市场"]',
          exampleUrls:
            'https://m.gkd.li/57941037/728ea1cd-ca19-4de9-9e7e-eb2a3513f965',
          snapshotUrls: 'https://i.gkd.li/i/14445502',
        },
      ],
    },
    {
      enable: false,
      key: 101,
      name: '功能类-自动展开回答',
      desc: '自动点击展开',
      rules: [
        {
          activityIds:
            'com.zhihu.android.mixshortcontainer.MixShortContainerActivity',
          matches:
            'ImageView[id="com.zhihu.android:id/iv_expand"] - TextView[id="com.zhihu.android:id/tv_expand"][text="展开"][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/6f6e5fd0-98a8-4a92-be02-7f34e3c5b8bd',
          snapshotUrls: [
            'https://i.gkd.li/i/12647688',
            'https://i.gkd.li/i/12707687', // 使用 [visibleToUser=true] 进行限定，防止在控件不可见时提前触发规则
          ],
        },
      ],
    },
  ],
});

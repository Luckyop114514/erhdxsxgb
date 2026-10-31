// Don't edit this line
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  // Title for your status page
  title: 'YFMC 服务器状态',
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://yfmc.xyz', label: '官网' },
    { link: 'mailto:hi@lazyop.cn', label: '联系我们', highlight: true },
  ],
}

const workerConfig: WorkerConfig = {
  // Define all your monitors here
  monitors: [
    {
      id: 'mc_wan',
      name: '主IP地址 wan.yfmc.xyz',
      method: 'TCP_PING',
      target: 'wan.yfmc.xyz:25565',
      tooltip: 'Minecraft 服务器 wan.yfmc.xyz',
      timeout: 5000,
    },
    {
      id: 'mc_play',
      name: '备IP地址-1 play.yfmc.xyz',
      method: 'TCP_PING',
      target: 'play.yfmc.xyz:25565',
      tooltip: 'Minecraft 服务器 play.yfmc.xyz',
      timeout: 5000,
    },
    {
      id: 'mc_p',
      name: '备IP地址-2 p.yfmc.xyz',
      method: 'TCP_PING',
      target: 'p.yfmc.xyz:25565',
      tooltip: 'Minecraft 服务器 p.yfmc.xyz',
      timeout: 5000,
    },
  ],
  // [Optional] Notification settings
  // More info at Wiki: https://github.com/lyc8503/UptimeFlare/wiki/Setup-notification
  notification: {
    // [Optional] timezone used in notification messages, default to "Etc/GMT"
    timeZone: 'Asia/Shanghai',
    // [Optional] grace period in minutes before sending a notification
    gracePeriod: 5,
  },
}

const maintenances: MaintenanceConfig[] = [
  {
    // [Optional] Monitor IDs to be affected by this maintenance
    monitors: ['mc_wan', 'mc_play', 'mc_p'],
    // [Optional] default to "Scheduled Maintenance" if not specified
    title: '服务器意外关机',
    // Description of the maintenance, will be shown at status page
    body: '服务器因未知原因关机，我们正在排查并尽快恢复服务。',
    // Start time of the maintenance, in UNIX timestamp or ISO 8601 format
    start: '2026-10-31T00:00:00+08:00',
    // [Optional] end time of the maintenance, in UNIX timestamp or ISO 8601 format
    // if not specified, the maintenance will be considered as on-going
    // end: '2026-10-31T12:00:00+08:00',
    // [Optional] color of the maintenance alert at status page, default to "yellow"
    color: 'red',
  },
]

// Don't edit this line
export { maintenances, pageConfig, workerConfig }

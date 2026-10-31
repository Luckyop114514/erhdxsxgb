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
      name: 'wan.yfmc.xyz',
      method: 'TCP_PING',
      target: 'wan.yfmc.xyz:25565',
      tooltip: 'Minecraft 服务器 wan.yfmc.xyz',
      timeout: 5000,
    },
    {
      id: 'mc_play',
      name: 'play.yfmc.xyz',
      method: 'TCP_PING',
      target: 'play.yfmc.xyz:25565',
      tooltip: 'Minecraft 服务器 play.yfmc.xyz',
      timeout: 5000,
    },
    {
      id: 'mc_p',
      name: 'p.yfmc.xyz',
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

const maintenances: MaintenanceConfig[] = []

// Don't edit this line
export { maintenances, pageConfig, workerConfig }

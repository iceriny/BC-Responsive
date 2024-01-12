import { DebugMode } from "./Utilities/Definition";
import { conDebug } from "./Utilities/Console";
import { ModVersion } from "./Utilities/Definition";

export class Localization {
  private static ENTextMap = new Map<string, string>([
    // Responsive Button
    ["infosheet.button.responsive_popup", "Responsive Settings"],

    // MainMenu
    ["mainmenu.title", `- BC Responsive v${ModVersion} -`],

    ["mainmenu.button.settings", "Settings"],
    ["mainmenu.button.responses", "Responses"],
    ["mainmenu.button.profiles", "Profiles"],

    // Settings
    ["settings.title", "- Settings -"],

    ["settings.setting.responsive_enabled.name", "Enable Responsive:"],
    ["settings.setting.responsive_enabled.desc", "Enables Responsive features."],

    ["settings.setting.responsesEnabled.name", "Enable responses:"],
    ["settings.setting.responsesEnabled.desc", "Enables responses. When someone does some actions on you, it activates responses. Configurable in Responses settings."],

    ["settings.setting.chartalk_enabled.name", "Enable Character Talk:"],
    ["settings.setting.chartalk_enabled.desc", "Enables mouth moving when talking."],

    ["settings.setting.interruption_enabled.name", "Enable interruption:"],
    ["settings.setting.interruption_enabled.desc", "Sends written message adding response to it. Happens when response triggers."],

    ["settings.setting.leave_message_enabled.name", "Enable leave message:"],
    ["settings.setting.leave_message_enabled.desc", "Sends message that you've been writing when you leashed out of room."],

    ["settings.setting.doAddMoansOnHighArousal.name", "Do add moans on high arousal:"],
    ["settings.setting.doAddMoansOnHighArousal.desc", "If enabled adds moans in end of responses. Moans defined on 2 page in Responses settings."],

    ["settings.setting.doPreventMessageIfBcxBlock.name", "Prevent messages if BCX rule blocks:"],
    ["settings.setting.doPreventMessageIfBcxBlock.desc", "If enabled will prevent message sending if certain BCX rules are active."],

    ["settings.setting.new_version_message_enabled.name", "Enable new version message:"],
    ["settings.setting.new_version_message_enabled.desc", "Shows you message about new version when it's out."],

    // Responses
    ["responses.title", "- Responses -"],

    ["responses.setting.self_trigger.name", "Self Trigger:"],
    ["responses.setting.self_trigger.desc", "Defines if response will be triggered when you are doing action on yourself."],

    ["responses.setting.master_set.name", "Master Set:"],
    ["responses.setting.master_set.desc", "If checked, responses will be changed for all action in the entry"],

    ["responses.setting.responses.name", "Responses:"],
    ["responses.setting.responses.desc", "Responses that will be send when action is done on you. Leave empty for no response for this action"],

    ["responses.setting.low_response.name", "Low Arousal Response:"],
    ["responses.setting.low_response.desc", "Responses that will be added to action response when arousal is more or equals 20 and less than 40"],

    ["responses.setting.light_response.name", "Light Arousal Response:"],
    ["responses.setting.light_response.desc", "Responses that will be added to action response when arousal is more or equals 40 and below 60"],

    ["responses.setting.medium_response.name", "Medium Arousal Response:"],
    ["responses.setting.medium_response.desc", "Responses that will be added to action response when arousal is more or equals 60 and below 80"],

    ["responses.setting.hot_response.name", "Hot Arousal Response:"],
    ["responses.setting.hot_response.desc", "Responses that will be added to action response when arousal is more or equals 80 and less than 100"],

    ["responses.setting.orgasm_response.name", "Orgasm Response:"],
    ["responses.setting.orgasm_response.desc", "Responses that will be send when you're orgasming. Leave empty for no response for this"],

    ["responses.other.syntax_error", ""],

    // Profiles
    ["profiles.title", "- Profiles -"],

    ["profiles.button.save", "Save"],
    ["profiles.button.load", "Load"],
    ["profiles.button.delete", "Delete"],

    ["profiles.prompt", "Please, enter profile name."],
    ["profiles.text.profile", "Profile"],
    ["profiles.text.has_been_saved", "has been saved!"],
    ["profiles.text.needs_to_be_saved", "needs to be saved first!"],
    ["profiles.text.has_been_loaded", "has been loaded!"],
    ["profiles.text.has_been_deleted", "has been deleted!"],
    ["profiles.text.not_saved_or_already_deleted", "is not saved or already deleted!"],

    // Reset
    ["reset.label.perma_reset_of_bcr_data", "- Permanent reset of ALL Responsive data -"],
    ["reset.label.warning", "- Warning -"],
    ["reset.label.if_u_confirm_perma_reset", "If you confirm, all Responsive data (including settings, responses and profiles) will be permanently reset!"],
    ["reset.label.youll_able_to_use_bcr", "You will be able to continue using Responsive, but all of your configuration will be reset to default!"],
    ["reset.label.action_cannot_be_undone", "This action cannot be undone!"],

    ["reset.button.confirm", "Confirm"],
    ["reset.button.cancel", "Cancel"],

    ["reset.setting.reset_for_manual_setting.text", "Do manual reset:"],
    ["reset.setting.reset_settings.text", "Do reset settings:"],
    ["reset.setting.reset_responses.text", "Do reset responses:"],
    ["reset.setting.reset_profiles.text", "Do reset profiles:"],

    ["reset.setting.reset_for_manual_setting.desc", "Resets everything to state that you could configure everything from the start."],
    ["reset.setting.reset_settings.desc", "Erases settings and then resets them to default ones."],
    ["reset.setting.reset_responses.desc", "Erases responses and then resets them to default ones."],
    ["reset.setting.reset_profiles.desc", "Erases profiles."],

    // Support
    ["support.title", "- Support -"],
    ["support.button.ko-fi", "Ko-fi"],
    ["support.button.patreon", "Patreon"],
    ["support.other.thankyou", "Thank you"]
  ]);

  private static CNTextMap = new Map<string, string>([
        // Responsive Button
        ["infosheet.button.responsive_popup", "Responsive设置"],

        // MainMenu
        ["mainmenu.title", `- BC Responsive v${ModVersion} -`],
    
        ["mainmenu.button.settings", "设置"],
        ["mainmenu.button.responses", "反应"],
        ["mainmenu.button.profiles", "配置"],
    
        // Settings
        ["settings.title", "- 设置 -"],
    
        ["settings.setting.responsive_enabled.name", "启用模组:"],
        ["settings.setting.responsive_enabled.desc", "启用模组相关功能。"],
    
        ["settings.setting.responsesEnabled.name", "启用反应:"],
        ["settings.setting.responsesEnabled.desc", "启用实时反应。 当有人对你采取某些行动时，它会触发反应。 可在 反应 设置中配置。"],
    
        ["settings.setting.chartalk_enabled.name", "启用角色言谈:"],
        ["settings.setting.chartalk_enabled.desc", "说话时有嘴部动画。"],
    
        ["settings.setting.interruption_enabled.name", "启用中断:"],
        ["settings.setting.interruption_enabled.desc", "发送正在写入的消息并做出反应。发生在触发反应时。"],
    
        ["settings.setting.leave_message_enabled.name", "启用离开消息:"],
        ["settings.setting.leave_message_enabled.desc", "当你被牵出房间时发送对话框中的内容。"],
    
        ["settings.setting.doAddMoansOnHighArousal.name", "是否在高兴奋时添加呻吟:"],
        ["settings.setting.doAddMoansOnHighArousal.desc", "如果启用，在反应的末尾添加呻吟声。在“响应设置”的第二页中定义呻吟声。"],
    
        ["settings.setting.doPreventMessageIfBcxBlock.name", "当BCX规则阻止消息时阻止消息:"],
        ["settings.setting.doPreventMessageIfBcxBlock.desc", "如果启用，将阻止在某些BCX规则生效时发送消息。"],
    
        ["settings.setting.new_version_message_enabled.name", "启用新版本信息:"],
        ["settings.setting.new_version_message_enabled.desc", "在新版本发布时向您显示有关新版本的消息。"],
    
        // Responses
        ["responses.title", "- 反应 -"],
    
        ["responses.setting.self_trigger.name", "自我触发:"],
        ["responses.setting.self_trigger.desc", "定义是否在您对自己执行操作时触发响应。"],
    
        ["responses.setting.master_set.name", "主设置:"],
        ["responses.setting.master_set.desc", "如果勾选，反应将针对该条目中的所有操作进行更改。"],
    
        ["responses.setting.responses.name", "反应:"],
        ["responses.setting.responses.desc", "当您对自己执行操作时，将发送的响应。如果不需要对此操作进行响应，请留空。"],
    
        ["responses.setting.low_response.name", "微兴奋反应:"],
        ["responses.setting.low_response.desc", "当兴奋度大于或等于20且小于40时，将添加到动作反应中的内容。"],
    
        ["responses.setting.light_response.name", "低兴奋反应:"],
        ["responses.setting.light_response.desc", "当兴奋度大于或等于40且小于60时，将添加到动作反应中的内容。"],
    
        ["responses.setting.medium_response.name", "中兴奋反应:"],
        ["responses.setting.medium_response.desc", "当兴奋度大于或等于60且小于80时，将添加到动作反应中的内容。"],
    
        ["responses.setting.hot_response.name", "高兴奋反应:"],
        ["responses.setting.hot_response.desc", "当兴奋度大于或等于80且小于100时，将添加到动作反应中的内容。"],
    
        ["responses.setting.orgasm_response.name", "高潮反应:"],
        ["responses.setting.orgasm_response.desc", "在您达到高潮时发送的响应。如果不需要对此进行响应，请留空。"],
    
        ["responses.other.syntax_error", ""],
    
        // Profiles
        ["profiles.title", "- 配置 -"],
    
        ["profiles.button.save", "保存"],
        ["profiles.button.load", "读取"],
        ["profiles.button.delete", "删除"],
    
        ["profiles.prompt", "请输入配置文件名称。"],
        ["profiles.text.profile", "配置"],
        ["profiles.text.has_been_saved", "已保存!"],
        ["profiles.text.needs_to_be_saved", "需要先保存!"],
        ["profiles.text.has_been_loaded", "已加载!"],
        ["profiles.text.has_been_deleted", "已删除!"],
        ["profiles.text.not_saved_or_already_deleted", "未保存或已删除!"],
    
        // Reset
        ["reset.label.perma_reset_of_bcr_data", "- 不可逆重置所有BCR数据 -"],
        ["reset.label.warning", "- 警告 -"],
        ["reset.label.if_u_confirm_perma_reset", "如果您确认，所有响应数据（包括设置、响应和配置文件）将被永久重置！"],
        ["reset.label.youll_able_to_use_bcr", "您将能够继续使用Responsive，但您的所有配置将被重置为默认值！"],
        ["reset.label.action_cannot_be_undone", "这个动作不能撤销!"],
    
        ["reset.button.confirm", "确认"],
        ["reset.button.cancel", "取消"],
    
        ["reset.setting.reset_for_manual_setting.text", "手动重置:"],
        ["reset.setting.reset_settings.text", "重置 设置:"],
        ["reset.setting.reset_responses.text", "重置 反应:"],
        ["reset.setting.reset_profiles.text", "重置 配置:"],
    
        ["reset.setting.reset_for_manual_setting.desc", "将一切重置为您可以从头开始配置的状态"],
        ["reset.setting.reset_settings.desc", "重置 设置，然后将其重置为默认设置。"],
        ["reset.setting.reset_responses.desc", "重置 响应，然后将其重置为默认响应。"],
        ["reset.setting.reset_profiles.desc", "清楚配置。"],
    
        // Support
        ["support.title", "- 支持 -"],
        ["support.button.ko-fi", "Ko-fi"],
        ["support.button.patreon", "Patreon"],
        ["support.other.thankyou", "感谢"]
  ]);

  private static RUTextMap = new Map<string, string>([]);

  static getText(srcTag: string) {
    if (DebugMode) Localization.logSrcTags(srcTag);
    return this[`${TranslationLanguage}TextMap`]?.get(srcTag) || this.ENTextMap?.get(srcTag) || srcTag || "";
  }

  static logSrcTags(srcTag: string) {
    if (!this[`${TranslationLanguage}TextMap`]?.get(srcTag)) {
      conDebug(`${srcTag} is not translated`);
    }
  }
}

export const getText = (string: string) => Localization.getText(string);

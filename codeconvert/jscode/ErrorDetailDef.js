var ErrorDetailDef = {};
//////////////////////////////////////sys start//////////////////////////////////////
ErrorDetailDef[RET_SYS_DISCON_USER_KICKED] = "此账号在另一处登录了";
ErrorDetailDef[RET_UNPACK_FAILED_RESULT] = "服务器解包失败";
ErrorDetailDef[RET_PLATFORM_ERROR] = "错误的登录平台";
ErrorDetailDef[RET_REQ_FAST_ERROR] = "请求过于频繁";
ErrorDetailDef[RET_REQ_REDIS_ERROR] = "redis操作失败";
ErrorDetailDef[RET_SYS_PACK_TYPE_INVALID] = "服务异常，请稍后再试";
ErrorDetailDef[RET_SYS_REPEAT_LOGINED] = "此账号已登录";
ErrorDetailDef[RET_REG_FAILED] = "注册失败";
ErrorDetailDef[RET_INVALID_VERITY_CODE] = "无效的验证码";
ErrorDetailDef[RET_VERIFY_CODE_FREQUENCY] = "验证码获取太频繁";
//////////////////////////////////////sys end///////////////////////////////////////

//////////////////////////////////////user start//////////////////////////////////////
ErrorDetailDef[RET_USERINFO_BASE] = "用户不存在";
ErrorDetailDef[RET_ADDUSER_BASE] = "用户已存在";
ErrorDetailDef[RET_UPDATEUSERINFO_BASE] = "用户属性不存在";
ErrorDetailDef[RET_GETUSERINFO_BASE] = "用户信息已是最新";
ErrorDetailDef[RET_NOATTRIBUTE_BASE] = "上传用户信息属性不全(user_name和mobile为必填项)";
ErrorDetailDef[RET_USERNAME_BASE] = "user_name已存在";
ErrorDetailDef[RET_MOBILE_BASE] = "mobile已存在";
ErrorDetailDef[RET_MAIL_BASE] = "mail已存在";
ErrorDetailDef[RET_COMPLAINTTYPE_BASE] = "举报类型错误";
ErrorDetailDef[RET_NEW_MOBILE_BASE] = "新手机号码不能与旧手机号码相同";
ErrorDetailDef[RET_CHECK_MOBILE_BASE] = "mobile验证失败";
ErrorDetailDef[RET_NEW_MAIL_BASE] = "新邮箱不能与旧邮箱相同";
ErrorDetailDef[RET_CHECK_MAIL_BASE] = "旧邮箱验证失败";
//////////////////////////////////////user end///////////////////////////////////////

//////////////////////////////////////chat start//////////////////////////////////////
ErrorDetailDef[RET_CHAT_UPLOAD_METHOD] = "上传方式不正确";
ErrorDetailDef[RET_CHAT_UPLOAD_TYPE] = "上传格式不正确";
ErrorDetailDef[RET_CHAT_UPLOAD_RESULT] = "上传失败";
ErrorDetailDef[RET_CHAT_SINGLE_STATUS_OP_USER_ID_INVALID] = "对端用户id错误";
ErrorDetailDef[RET_CHAT_MSG_CONTENT_MAX] = "消息内容过长";
//////////////////////////////////////chat end///////////////////////////////////////

//////////////////////////////////////friend start//////////////////////////////////////
ErrorDetailDef[RET_FRIEND_ALREADY_EXISTED] = "好友已存在";
ErrorDetailDef[RET_FRIEND_LIST_ERROR] = "查询好友列表失败";
ErrorDetailDef[RET_FRIEND_ADD_ERROR] = "添加好友失败";
ErrorDetailDef[RET_FRIEND_DEL_ERROR] = "删除好友失败";
ErrorDetailDef[RET_FRIEND_MODIFY_ERROR] = "修改好友信息失败";
ErrorDetailDef[RET_FRIEND_CONFIRM_TIMEOUT_ERROR] = "好友确认请求超时";
ErrorDetailDef[RET_FRIEND_AGREE_ERROR] = "好友同意失败";
ErrorDetailDef[RET_FRIEND_REFUSE_ERROR] = "好友拒绝失败";
ErrorDetailDef[RET_FRIEND_BLACK_LIST_ERROR] = "黑名单设置失败";
ErrorDetailDef[RET_FRIEND_HAS_BLACK_ERROR] = "添加好友失败，是对方的黑名单用户";
ErrorDetailDef[RET_FRIEND_SETTING_STATUS_ERROR] = "设置状态失败";
ErrorDetailDef[RET_FRIEND_HAVE_BLACK_ERROR] = "已经在黑名单里";
ErrorDetailDef[RET_FRIEND_BE_DELETE_ERROR] = "被删除好友，恢复好友关系";
ErrorDetailDef[RET_FRIEND_RELATION_ERROR] = "等待好友处理";
ErrorDetailDef[RET_FRIEND_MAXCNT_ERROR] = "你已达到好友上限";
ErrorDetailDef[RET_FRIEND_PEERMAXCNT_ERROR] = "对方好友达到上限";
ErrorDetailDef[RET_FRIEND_REMARK_ERROR] = "好友备注名过长";
//////////////////////////////////////friend end///////////////////////////////////////

//////////////////////////////////////group start//////////////////////////////////////
ErrorDetailDef[RET_CREATE_USER_LIST_EMPTY] = "建群用户列表为空";
ErrorDetailDef[RET_OPERATE_TYPE_ERROR] = "用户操作无效";
ErrorDetailDef[RET_GROUP_ID_INVALID] = "群组不存在";
ErrorDetailDef[RET_GROUP_OPREATE_USER_ID_INVALID] = "用户不是群主";
ErrorDetailDef[RET_GROUP_USER_NOT_JOIN] = "用户未加入群";
ErrorDetailDef[RET_GROUP_USER_HAS_JOIN] = "用户已经加入该群";
ErrorDetailDef[RET_GROUP_OPERATE_INFO_ERROR] = "踢人或者邀请用户信息错误";
ErrorDetailDef[RET_GROUP_CREATE_MAX_COUNT] = "建群超过默认最大数";
ErrorDetailDef[RET_GROUP_INVITE_FAILED] = "添加用户失败";
ErrorDetailDef[RET_GROUP_KICK_FAILED] = "踢人失败";
ErrorDetailDef[RET_GROUP_LEADER_CHANGE_SELF] = "已经是群主";
ErrorDetailDef[RET_GROUP_LEADER_NAME_IS_NIL] = "被转让用户参数有误";
ErrorDetailDef[RET_GROUP_AGREE_DEFAULT] = "群当前为默认加入";
ErrorDetailDef[RET_GROUP_AGREE_USER] = "群当前为需要群主同意";
ErrorDetailDef[DEF_GROUP_AGREE_OLD_MESSAGE_ID_INVALID] = "群主同意失败";
ErrorDetailDef[RET_GROUP_ADD_ERROR] = "添加群组失败";
ErrorDetailDef[RET_GROUP_ADD_EXSIST] = "当前群组已经存在";
ErrorDetailDef[RET_GROUP_MEMBER_LIST_ERROR] = "获取群成员列表失败";
ErrorDetailDef[RET_GROUP_MEMBER_CHANGE_ERROR] = "群主转让失败";
ErrorDetailDef[RET_GROUP_ADD_MESSAGE_ERROR] = "群消息保存失败";
ErrorDetailDef[RET_GROUP_MAX_LIMIT_ERROR] = "群人数已上限";
ErrorDetailDef[RET_GROUP_SINGLE_LIMIT_ERROR] = "单次拉人上限";
ErrorDetailDef[RET_GROUP_MODIFY_REMARK_ERROR] = "修改群公告失败";
ErrorDetailDef[RET_GROUP_MESSAGE_ID_INVALID] = "群聊消息id无效";
ErrorDetailDef[RET_GROUP_BATCH_GET_LIST_EMPTY] = "批量获取群信息列表为空";
ErrorDetailDef[RET_GROUP_BATCH_LIST_INVALID] = "批量获取群信息列表过大";
ErrorDetailDef[RET_GROUP_OFFLINE_MAX_COUNT] = "批量获取群离线超过上限";
ErrorDetailDef[RET_GROUP_MODIFY_NAME_ERROR] = "修改群名称失败名称过长";
ErrorDetailDef[RET_GROUP_MODIFY_NICK_NAME_ERROR] = "修改群成员昵称失败昵称过长";
ErrorDetailDef[RET_GROUP_REPEATED_PACK] = "收到重发群信息包";
//////////////////////////////////////group end///////////////////////////////////////

//////////////////////////////////////offcial start//////////////////////////////////////
ErrorDetailDef[RET_OFFCIALMSG_BASE] = "公众号消息发送过于频繁";
ErrorDetailDef[RET_OFFCIALNAME_BASE] = "公众号用户名不能为空";
ErrorDetailDef[RET_OFFCIALMSG_CONTENT_BASE] = "公众号消息结构不全";
//////////////////////////////////////offcial end///////////////////////////////////////

//////////////////////////////////////business start//////////////////////////////////////
ErrorDetailDef[RET_MOMENTS_ARTICLE_SAVED_ERROR] = "朋友圈保存异常，请稍后再试!";
ErrorDetailDef[RET_MOMENTS_ARTICLE_DELETED_ERROR] = "朋友圈删除异常，请稍后再试!";
ErrorDetailDef[RET_MOMENTS_ARTICLE_QUERY_ERROR] = "没有找到信息，请稍后再试!";
ErrorDetailDef[RET_MOMENTS_COMMENT_SAVE_ERROR] = "评论保存异常，请稍后再试!";
ErrorDetailDef[RET_MOMENTS_COMMENT_DELETED_ERROR] = "评论删除异常，请稍候再试!";
ErrorDetailDef[RET_MOMENTS_SETTING_SAVE_ERROR] = "朋友圈设置保存异常，请稍候再试!";
ErrorDetailDef[RET_MOMENTS_SETTING_BLACKLIST_SAVE_ERROR] = "朋友圈黑名单设置保存异常，请稍候再试!";
ErrorDetailDef[RET_MOMENTS_SETTING_NOTCARELIST_SAVE_ERROR] = "朋友圈不关注设置保存异常，请稍候再试!";
ErrorDetailDef[RET_MOMENTS_SETTING_QUERY_ERROR] = "朋友圈配置查询异常，请稍候再试!";
ErrorDetailDef[RET_MOMENTS_PARAM_ERROR] = "操作参数错误！";
//////////////////////////////////////business end///////////////////////////////////////


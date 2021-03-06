// automatically generated by the FlatBuffers compiler, do not modify

package grouppack;

import java.nio.*;
import java.lang.*;
import java.util.*;
import com.google.flatbuffers.*;

@SuppressWarnings("unused")
public final class T_GROUP_BASE_INFO extends Table {
  public static T_GROUP_BASE_INFO getRootAsT_GROUP_BASE_INFO(ByteBuffer _bb) { return getRootAsT_GROUP_BASE_INFO(_bb, new T_GROUP_BASE_INFO()); }
  public static T_GROUP_BASE_INFO getRootAsT_GROUP_BASE_INFO(ByteBuffer _bb, T_GROUP_BASE_INFO obj) { _bb.order(ByteOrder.LITTLE_ENDIAN); return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb)); }
  public void __init(int _i, ByteBuffer _bb) { bb_pos = _i; bb = _bb; }
  public T_GROUP_BASE_INFO __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  public long groupId() { int o = __offset(4); return o != 0 ? bb.getLong(o + bb_pos) : 0L; }
  public String groupName() { int o = __offset(6); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer groupNameAsByteBuffer() { return __vector_as_bytebuffer(6, 1); }
  public String groupImgUrl() { int o = __offset(8); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer groupImgUrlAsByteBuffer() { return __vector_as_bytebuffer(8, 1); }
  public int groupCount() { int o = __offset(10); return o != 0 ? bb.getInt(o + bb_pos) : 0; }
  public long groupManagerUserId() { int o = __offset(12); return o != 0 ? bb.getLong(o + bb_pos) : 0L; }
  public byte groupAddIsAgree() { int o = __offset(14); return o != 0 ? bb.get(o + bb_pos) : 0; }
  public long groupCt() { int o = __offset(16); return o != 0 ? bb.getLong(o + bb_pos) : 0L; }
  public String groupRemark() { int o = __offset(18); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer groupRemarkAsByteBuffer() { return __vector_as_bytebuffer(18, 1); }
  public int groupMaxCount() { int o = __offset(20); return o != 0 ? bb.getInt(o + bb_pos) : 0; }
  public byte messageStatus() { int o = __offset(22); return o != 0 ? bb.get(o + bb_pos) : 0; }
  public int groupAddMaxCount() { int o = __offset(24); return o != 0 ? bb.getInt(o + bb_pos) : 0; }

  public static int createT_GROUP_BASE_INFO(FlatBufferBuilder builder,
      long group_id,
      int group_nameOffset,
      int group_img_urlOffset,
      int group_count,
      long group_manager_user_id,
      byte group_add_is_agree,
      long group_ct,
      int group_remarkOffset,
      int group_max_count,
      byte message_status,
      int group_add_max_count) {
    builder.startObject(11);
    T_GROUP_BASE_INFO.addGroupCt(builder, group_ct);
    T_GROUP_BASE_INFO.addGroupManagerUserId(builder, group_manager_user_id);
    T_GROUP_BASE_INFO.addGroupId(builder, group_id);
    T_GROUP_BASE_INFO.addGroupAddMaxCount(builder, group_add_max_count);
    T_GROUP_BASE_INFO.addGroupMaxCount(builder, group_max_count);
    T_GROUP_BASE_INFO.addGroupRemark(builder, group_remarkOffset);
    T_GROUP_BASE_INFO.addGroupCount(builder, group_count);
    T_GROUP_BASE_INFO.addGroupImgUrl(builder, group_img_urlOffset);
    T_GROUP_BASE_INFO.addGroupName(builder, group_nameOffset);
    T_GROUP_BASE_INFO.addMessageStatus(builder, message_status);
    T_GROUP_BASE_INFO.addGroupAddIsAgree(builder, group_add_is_agree);
    return T_GROUP_BASE_INFO.endT_GROUP_BASE_INFO(builder);
  }

  public static void startT_GROUP_BASE_INFO(FlatBufferBuilder builder) { builder.startObject(11); }
  public static void addGroupId(FlatBufferBuilder builder, long groupId) { builder.addLong(0, groupId, 0L); }
  public static void addGroupName(FlatBufferBuilder builder, int groupNameOffset) { builder.addOffset(1, groupNameOffset, 0); }
  public static void addGroupImgUrl(FlatBufferBuilder builder, int groupImgUrlOffset) { builder.addOffset(2, groupImgUrlOffset, 0); }
  public static void addGroupCount(FlatBufferBuilder builder, int groupCount) { builder.addInt(3, groupCount, 0); }
  public static void addGroupManagerUserId(FlatBufferBuilder builder, long groupManagerUserId) { builder.addLong(4, groupManagerUserId, 0L); }
  public static void addGroupAddIsAgree(FlatBufferBuilder builder, byte groupAddIsAgree) { builder.addByte(5, groupAddIsAgree, 0); }
  public static void addGroupCt(FlatBufferBuilder builder, long groupCt) { builder.addLong(6, groupCt, 0L); }
  public static void addGroupRemark(FlatBufferBuilder builder, int groupRemarkOffset) { builder.addOffset(7, groupRemarkOffset, 0); }
  public static void addGroupMaxCount(FlatBufferBuilder builder, int groupMaxCount) { builder.addInt(8, groupMaxCount, 0); }
  public static void addMessageStatus(FlatBufferBuilder builder, byte messageStatus) { builder.addByte(9, messageStatus, 0); }
  public static void addGroupAddMaxCount(FlatBufferBuilder builder, int groupAddMaxCount) { builder.addInt(10, groupAddMaxCount, 0); }
  public static int endT_GROUP_BASE_INFO(FlatBufferBuilder builder) {
    int o = builder.endObject();
    return o;
  }
  public static void finishT_GROUP_BASE_INFOBuffer(FlatBufferBuilder builder, int offset) { builder.finish(offset); }
}


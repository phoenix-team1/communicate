// automatically generated by the FlatBuffers compiler, do not modify

package grouppack;

import java.nio.*;
import java.lang.*;
import java.util.*;
import com.google.flatbuffers.*;

@SuppressWarnings("unused")
public final class T_GROUP_DETAIL_INFO_RQ extends Table {
  public static T_GROUP_DETAIL_INFO_RQ getRootAsT_GROUP_DETAIL_INFO_RQ(ByteBuffer _bb) { return getRootAsT_GROUP_DETAIL_INFO_RQ(_bb, new T_GROUP_DETAIL_INFO_RQ()); }
  public static T_GROUP_DETAIL_INFO_RQ getRootAsT_GROUP_DETAIL_INFO_RQ(ByteBuffer _bb, T_GROUP_DETAIL_INFO_RQ obj) { _bb.order(ByteOrder.LITTLE_ENDIAN); return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb)); }
  public void __init(int _i, ByteBuffer _bb) { bb_pos = _i; bb = _bb; }
  public T_GROUP_DETAIL_INFO_RQ __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  public commonpack.S_RQ_HEAD sRqHead() { return sRqHead(new commonpack.S_RQ_HEAD()); }
  public commonpack.S_RQ_HEAD sRqHead(commonpack.S_RQ_HEAD obj) { int o = __offset(4); return o != 0 ? obj.__assign(o + bb_pos, bb) : null; }
  public long groupId() { int o = __offset(6); return o != 0 ? bb.getLong(o + bb_pos) : 0L; }
  public int groupMemberIndex() { int o = __offset(8); return o != 0 ? bb.getInt(o + bb_pos) : 0; }

  public static void startT_GROUP_DETAIL_INFO_RQ(FlatBufferBuilder builder) { builder.startObject(3); }
  public static void addSRqHead(FlatBufferBuilder builder, int sRqHeadOffset) { builder.addStruct(0, sRqHeadOffset, 0); }
  public static void addGroupId(FlatBufferBuilder builder, long groupId) { builder.addLong(1, groupId, 0L); }
  public static void addGroupMemberIndex(FlatBufferBuilder builder, int groupMemberIndex) { builder.addInt(2, groupMemberIndex, 0); }
  public static int endT_GROUP_DETAIL_INFO_RQ(FlatBufferBuilder builder) {
    int o = builder.endObject();
    return o;
  }
  public static void finishT_GROUP_DETAIL_INFO_RQBuffer(FlatBufferBuilder builder, int offset) { builder.finish(offset); }
}


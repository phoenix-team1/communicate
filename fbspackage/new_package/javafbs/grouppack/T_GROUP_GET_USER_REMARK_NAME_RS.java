// automatically generated by the FlatBuffers compiler, do not modify

package grouppack;

import java.nio.*;
import java.lang.*;
import java.util.*;
import com.google.flatbuffers.*;

@SuppressWarnings("unused")
public final class T_GROUP_GET_USER_REMARK_NAME_RS extends Table {
  public static T_GROUP_GET_USER_REMARK_NAME_RS getRootAsT_GROUP_GET_USER_REMARK_NAME_RS(ByteBuffer _bb) { return getRootAsT_GROUP_GET_USER_REMARK_NAME_RS(_bb, new T_GROUP_GET_USER_REMARK_NAME_RS()); }
  public static T_GROUP_GET_USER_REMARK_NAME_RS getRootAsT_GROUP_GET_USER_REMARK_NAME_RS(ByteBuffer _bb, T_GROUP_GET_USER_REMARK_NAME_RS obj) { _bb.order(ByteOrder.LITTLE_ENDIAN); return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb)); }
  public void __init(int _i, ByteBuffer _bb) { bb_pos = _i; bb = _bb; }
  public T_GROUP_GET_USER_REMARK_NAME_RS __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  public commonpack.S_RS_HEAD sRsHead() { return sRsHead(new commonpack.S_RS_HEAD()); }
  public commonpack.S_RS_HEAD sRsHead(commonpack.S_RS_HEAD obj) { int o = __offset(4); return o != 0 ? obj.__assign(o + bb_pos, bb) : null; }
  public long groupId() { int o = __offset(6); return o != 0 ? bb.getLong(o + bb_pos) : 0L; }
  public String userRemarkName() { int o = __offset(8); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer userRemarkNameAsByteBuffer() { return __vector_as_bytebuffer(8, 1); }

  public static void startT_GROUP_GET_USER_REMARK_NAME_RS(FlatBufferBuilder builder) { builder.startObject(3); }
  public static void addSRsHead(FlatBufferBuilder builder, int sRsHeadOffset) { builder.addStruct(0, sRsHeadOffset, 0); }
  public static void addGroupId(FlatBufferBuilder builder, long groupId) { builder.addLong(1, groupId, 0L); }
  public static void addUserRemarkName(FlatBufferBuilder builder, int userRemarkNameOffset) { builder.addOffset(2, userRemarkNameOffset, 0); }
  public static int endT_GROUP_GET_USER_REMARK_NAME_RS(FlatBufferBuilder builder) {
    int o = builder.endObject();
    return o;
  }
  public static void finishT_GROUP_GET_USER_REMARK_NAME_RSBuffer(FlatBufferBuilder builder, int offset) { builder.finish(offset); }
}

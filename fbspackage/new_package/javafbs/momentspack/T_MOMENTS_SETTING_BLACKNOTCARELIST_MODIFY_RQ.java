// automatically generated by the FlatBuffers compiler, do not modify

package momentspack;

import java.nio.*;
import java.lang.*;
import java.util.*;
import com.google.flatbuffers.*;

@SuppressWarnings("unused")
public final class T_MOMENTS_SETTING_BLACKNOTCARELIST_MODIFY_RQ extends Table {
  public static T_MOMENTS_SETTING_BLACKNOTCARELIST_MODIFY_RQ getRootAsT_MOMENTS_SETTING_BLACKNOTCARELIST_MODIFY_RQ(ByteBuffer _bb) { return getRootAsT_MOMENTS_SETTING_BLACKNOTCARELIST_MODIFY_RQ(_bb, new T_MOMENTS_SETTING_BLACKNOTCARELIST_MODIFY_RQ()); }
  public static T_MOMENTS_SETTING_BLACKNOTCARELIST_MODIFY_RQ getRootAsT_MOMENTS_SETTING_BLACKNOTCARELIST_MODIFY_RQ(ByteBuffer _bb, T_MOMENTS_SETTING_BLACKNOTCARELIST_MODIFY_RQ obj) { _bb.order(ByteOrder.LITTLE_ENDIAN); return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb)); }
  public void __init(int _i, ByteBuffer _bb) { bb_pos = _i; bb = _bb; }
  public T_MOMENTS_SETTING_BLACKNOTCARELIST_MODIFY_RQ __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  public commonpack.S_RQ_HEAD sRqHead() { return sRqHead(new commonpack.S_RQ_HEAD()); }
  public commonpack.S_RQ_HEAD sRqHead(commonpack.S_RQ_HEAD obj) { int o = __offset(4); return o != 0 ? obj.__assign(o + bb_pos, bb) : null; }
  public long userId() { int o = __offset(6); return o != 0 ? bb.getLong(o + bb_pos) : 0L; }
  public byte listType() { int o = __offset(8); return o != 0 ? bb.get(o + bb_pos) : 0; }
  public String list() { int o = __offset(10); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer listAsByteBuffer() { return __vector_as_bytebuffer(10, 1); }

  public static void startT_MOMENTS_SETTING_BLACKNOTCARELIST_MODIFY_RQ(FlatBufferBuilder builder) { builder.startObject(4); }
  public static void addSRqHead(FlatBufferBuilder builder, int sRqHeadOffset) { builder.addStruct(0, sRqHeadOffset, 0); }
  public static void addUserId(FlatBufferBuilder builder, long userId) { builder.addLong(1, userId, 0L); }
  public static void addListType(FlatBufferBuilder builder, byte listType) { builder.addByte(2, listType, 0); }
  public static void addList(FlatBufferBuilder builder, int listOffset) { builder.addOffset(3, listOffset, 0); }
  public static int endT_MOMENTS_SETTING_BLACKNOTCARELIST_MODIFY_RQ(FlatBufferBuilder builder) {
    int o = builder.endObject();
    return o;
  }
  public static void finishT_MOMENTS_SETTING_BLACKNOTCARELIST_MODIFY_RQBuffer(FlatBufferBuilder builder, int offset) { builder.finish(offset); }
}

// automatically generated by the FlatBuffers compiler, do not modify

package scpack;

import java.nio.*;
import java.lang.*;
import java.util.*;
import com.google.flatbuffers.*;

@SuppressWarnings("unused")
public final class T_GET_USER_STATUS_RS extends Table {
  public static T_GET_USER_STATUS_RS getRootAsT_GET_USER_STATUS_RS(ByteBuffer _bb) { return getRootAsT_GET_USER_STATUS_RS(_bb, new T_GET_USER_STATUS_RS()); }
  public static T_GET_USER_STATUS_RS getRootAsT_GET_USER_STATUS_RS(ByteBuffer _bb, T_GET_USER_STATUS_RS obj) { _bb.order(ByteOrder.LITTLE_ENDIAN); return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb)); }
  public void __init(int _i, ByteBuffer _bb) { bb_pos = _i; bb = _bb; }
  public T_GET_USER_STATUS_RS __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  public commonpack.S_RS_HEAD sRsHead() { return sRsHead(new commonpack.S_RS_HEAD()); }
  public commonpack.S_RS_HEAD sRsHead(commonpack.S_RS_HEAD obj) { int o = __offset(4); return o != 0 ? obj.__assign(o + bb_pos, bb) : null; }
  public long listUserIds(int j) { int o = __offset(6); return o != 0 ? bb.getLong(__vector(o) + j * 8) : 0; }
  public int listUserIdsLength() { int o = __offset(6); return o != 0 ? __vector_len(o) : 0; }
  public ByteBuffer listUserIdsAsByteBuffer() { return __vector_as_bytebuffer(6, 8); }

  public static void startT_GET_USER_STATUS_RS(FlatBufferBuilder builder) { builder.startObject(2); }
  public static void addSRsHead(FlatBufferBuilder builder, int sRsHeadOffset) { builder.addStruct(0, sRsHeadOffset, 0); }
  public static void addListUserIds(FlatBufferBuilder builder, int listUserIdsOffset) { builder.addOffset(1, listUserIdsOffset, 0); }
  public static int createListUserIdsVector(FlatBufferBuilder builder, long[] data) { builder.startVector(8, data.length, 8); for (int i = data.length - 1; i >= 0; i--) builder.addLong(data[i]); return builder.endVector(); }
  public static void startListUserIdsVector(FlatBufferBuilder builder, int numElems) { builder.startVector(8, numElems, 8); }
  public static int endT_GET_USER_STATUS_RS(FlatBufferBuilder builder) {
    int o = builder.endObject();
    return o;
  }
  public static void finishT_GET_USER_STATUS_RSBuffer(FlatBufferBuilder builder, int offset) { builder.finish(offset); }
}


// automatically generated by the FlatBuffers compiler, do not modify

package ecpack;

import java.nio.*;
import java.lang.*;
import java.util.*;
import com.google.flatbuffers.*;

@SuppressWarnings("unused")
public final class T_EC_GETRECENTUSERS_RS extends Table {
  public static T_EC_GETRECENTUSERS_RS getRootAsT_EC_GETRECENTUSERS_RS(ByteBuffer _bb) { return getRootAsT_EC_GETRECENTUSERS_RS(_bb, new T_EC_GETRECENTUSERS_RS()); }
  public static T_EC_GETRECENTUSERS_RS getRootAsT_EC_GETRECENTUSERS_RS(ByteBuffer _bb, T_EC_GETRECENTUSERS_RS obj) { _bb.order(ByteOrder.LITTLE_ENDIAN); return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb)); }
  public void __init(int _i, ByteBuffer _bb) { bb_pos = _i; bb = _bb; }
  public T_EC_GETRECENTUSERS_RS __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  public commonpack.S_RS_HEAD sRsHead() { return sRsHead(new commonpack.S_RS_HEAD()); }
  public commonpack.S_RS_HEAD sRsHead(commonpack.S_RS_HEAD obj) { int o = __offset(4); return o != 0 ? obj.__assign(o + bb_pos, bb) : null; }
  public long bId() { int o = __offset(6); return o != 0 ? bb.getLong(o + bb_pos) : 0L; }
  public long cIdList(int j) { int o = __offset(8); return o != 0 ? bb.getLong(__vector(o) + j * 8) : 0; }
  public int cIdListLength() { int o = __offset(8); return o != 0 ? __vector_len(o) : 0; }
  public ByteBuffer cIdListAsByteBuffer() { return __vector_as_bytebuffer(8, 8); }

  public static void startT_EC_GETRECENTUSERS_RS(FlatBufferBuilder builder) { builder.startObject(3); }
  public static void addSRsHead(FlatBufferBuilder builder, int sRsHeadOffset) { builder.addStruct(0, sRsHeadOffset, 0); }
  public static void addBId(FlatBufferBuilder builder, long bId) { builder.addLong(1, bId, 0L); }
  public static void addCIdList(FlatBufferBuilder builder, int cIdListOffset) { builder.addOffset(2, cIdListOffset, 0); }
  public static int createCIdListVector(FlatBufferBuilder builder, long[] data) { builder.startVector(8, data.length, 8); for (int i = data.length - 1; i >= 0; i--) builder.addLong(data[i]); return builder.endVector(); }
  public static void startCIdListVector(FlatBufferBuilder builder, int numElems) { builder.startVector(8, numElems, 8); }
  public static int endT_EC_GETRECENTUSERS_RS(FlatBufferBuilder builder) {
    int o = builder.endObject();
    return o;
  }
  public static void finishT_EC_GETRECENTUSERS_RSBuffer(FlatBufferBuilder builder, int offset) { builder.finish(offset); }
}

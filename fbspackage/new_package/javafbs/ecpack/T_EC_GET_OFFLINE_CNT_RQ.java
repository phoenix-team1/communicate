// automatically generated by the FlatBuffers compiler, do not modify

package ecpack;

import java.nio.*;
import java.lang.*;
import java.util.*;
import com.google.flatbuffers.*;

@SuppressWarnings("unused")
public final class T_EC_GET_OFFLINE_CNT_RQ extends Table {
  public static T_EC_GET_OFFLINE_CNT_RQ getRootAsT_EC_GET_OFFLINE_CNT_RQ(ByteBuffer _bb) { return getRootAsT_EC_GET_OFFLINE_CNT_RQ(_bb, new T_EC_GET_OFFLINE_CNT_RQ()); }
  public static T_EC_GET_OFFLINE_CNT_RQ getRootAsT_EC_GET_OFFLINE_CNT_RQ(ByteBuffer _bb, T_EC_GET_OFFLINE_CNT_RQ obj) { _bb.order(ByteOrder.LITTLE_ENDIAN); return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb)); }
  public void __init(int _i, ByteBuffer _bb) { bb_pos = _i; bb = _bb; }
  public T_EC_GET_OFFLINE_CNT_RQ __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  public commonpack.S_RQ_HEAD sRqHead() { return sRqHead(new commonpack.S_RQ_HEAD()); }
  public commonpack.S_RQ_HEAD sRqHead(commonpack.S_RQ_HEAD obj) { int o = __offset(4); return o != 0 ? obj.__assign(o + bb_pos, bb) : null; }
  public long bIdList(int j) { int o = __offset(6); return o != 0 ? bb.getLong(__vector(o) + j * 8) : 0; }
  public int bIdListLength() { int o = __offset(6); return o != 0 ? __vector_len(o) : 0; }
  public ByteBuffer bIdListAsByteBuffer() { return __vector_as_bytebuffer(6, 8); }

  public static void startT_EC_GET_OFFLINE_CNT_RQ(FlatBufferBuilder builder) { builder.startObject(2); }
  public static void addSRqHead(FlatBufferBuilder builder, int sRqHeadOffset) { builder.addStruct(0, sRqHeadOffset, 0); }
  public static void addBIdList(FlatBufferBuilder builder, int bIdListOffset) { builder.addOffset(1, bIdListOffset, 0); }
  public static int createBIdListVector(FlatBufferBuilder builder, long[] data) { builder.startVector(8, data.length, 8); for (int i = data.length - 1; i >= 0; i--) builder.addLong(data[i]); return builder.endVector(); }
  public static void startBIdListVector(FlatBufferBuilder builder, int numElems) { builder.startVector(8, numElems, 8); }
  public static int endT_EC_GET_OFFLINE_CNT_RQ(FlatBufferBuilder builder) {
    int o = builder.endObject();
    return o;
  }
  public static void finishT_EC_GET_OFFLINE_CNT_RQBuffer(FlatBufferBuilder builder, int offset) { builder.finish(offset); }
}


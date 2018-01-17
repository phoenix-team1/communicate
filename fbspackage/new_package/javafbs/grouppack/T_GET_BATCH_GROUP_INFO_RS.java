// automatically generated by the FlatBuffers compiler, do not modify

package grouppack;

import java.nio.*;
import java.lang.*;
import java.util.*;
import com.google.flatbuffers.*;

@SuppressWarnings("unused")
public final class T_GET_BATCH_GROUP_INFO_RS extends Table {
  public static T_GET_BATCH_GROUP_INFO_RS getRootAsT_GET_BATCH_GROUP_INFO_RS(ByteBuffer _bb) { return getRootAsT_GET_BATCH_GROUP_INFO_RS(_bb, new T_GET_BATCH_GROUP_INFO_RS()); }
  public static T_GET_BATCH_GROUP_INFO_RS getRootAsT_GET_BATCH_GROUP_INFO_RS(ByteBuffer _bb, T_GET_BATCH_GROUP_INFO_RS obj) { _bb.order(ByteOrder.LITTLE_ENDIAN); return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb)); }
  public void __init(int _i, ByteBuffer _bb) { bb_pos = _i; bb = _bb; }
  public T_GET_BATCH_GROUP_INFO_RS __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  public commonpack.S_RS_HEAD sRsHead() { return sRsHead(new commonpack.S_RS_HEAD()); }
  public commonpack.S_RS_HEAD sRsHead(commonpack.S_RS_HEAD obj) { int o = __offset(4); return o != 0 ? obj.__assign(o + bb_pos, bb) : null; }
  public long listGroupId(int j) { int o = __offset(6); return o != 0 ? bb.getLong(__vector(o) + j * 8) : 0; }
  public int listGroupIdLength() { int o = __offset(6); return o != 0 ? __vector_len(o) : 0; }
  public ByteBuffer listGroupIdAsByteBuffer() { return __vector_as_bytebuffer(6, 8); }
  public grouppack.T_GROUP_BASE_INFO listGroupInfo(int j) { return listGroupInfo(new grouppack.T_GROUP_BASE_INFO(), j); }
  public grouppack.T_GROUP_BASE_INFO listGroupInfo(grouppack.T_GROUP_BASE_INFO obj, int j) { int o = __offset(8); return o != 0 ? obj.__assign(__indirect(__vector(o) + j * 4), bb) : null; }
  public int listGroupInfoLength() { int o = __offset(8); return o != 0 ? __vector_len(o) : 0; }

  public static void startT_GET_BATCH_GROUP_INFO_RS(FlatBufferBuilder builder) { builder.startObject(3); }
  public static void addSRsHead(FlatBufferBuilder builder, int sRsHeadOffset) { builder.addStruct(0, sRsHeadOffset, 0); }
  public static void addListGroupId(FlatBufferBuilder builder, int listGroupIdOffset) { builder.addOffset(1, listGroupIdOffset, 0); }
  public static int createListGroupIdVector(FlatBufferBuilder builder, long[] data) { builder.startVector(8, data.length, 8); for (int i = data.length - 1; i >= 0; i--) builder.addLong(data[i]); return builder.endVector(); }
  public static void startListGroupIdVector(FlatBufferBuilder builder, int numElems) { builder.startVector(8, numElems, 8); }
  public static void addListGroupInfo(FlatBufferBuilder builder, int listGroupInfoOffset) { builder.addOffset(2, listGroupInfoOffset, 0); }
  public static int createListGroupInfoVector(FlatBufferBuilder builder, int[] data) { builder.startVector(4, data.length, 4); for (int i = data.length - 1; i >= 0; i--) builder.addOffset(data[i]); return builder.endVector(); }
  public static void startListGroupInfoVector(FlatBufferBuilder builder, int numElems) { builder.startVector(4, numElems, 4); }
  public static int endT_GET_BATCH_GROUP_INFO_RS(FlatBufferBuilder builder) {
    int o = builder.endObject();
    return o;
  }
  public static void finishT_GET_BATCH_GROUP_INFO_RSBuffer(FlatBufferBuilder builder, int offset) { builder.finish(offset); }
}


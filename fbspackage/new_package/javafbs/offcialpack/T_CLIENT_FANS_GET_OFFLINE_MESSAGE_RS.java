// automatically generated by the FlatBuffers compiler, do not modify

package offcialpack;

import java.nio.*;
import java.lang.*;
import java.util.*;
import com.google.flatbuffers.*;

@SuppressWarnings("unused")
public final class T_CLIENT_FANS_GET_OFFLINE_MESSAGE_RS extends Table {
  public static T_CLIENT_FANS_GET_OFFLINE_MESSAGE_RS getRootAsT_CLIENT_FANS_GET_OFFLINE_MESSAGE_RS(ByteBuffer _bb) { return getRootAsT_CLIENT_FANS_GET_OFFLINE_MESSAGE_RS(_bb, new T_CLIENT_FANS_GET_OFFLINE_MESSAGE_RS()); }
  public static T_CLIENT_FANS_GET_OFFLINE_MESSAGE_RS getRootAsT_CLIENT_FANS_GET_OFFLINE_MESSAGE_RS(ByteBuffer _bb, T_CLIENT_FANS_GET_OFFLINE_MESSAGE_RS obj) { _bb.order(ByteOrder.LITTLE_ENDIAN); return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb)); }
  public void __init(int _i, ByteBuffer _bb) { bb_pos = _i; bb = _bb; }
  public T_CLIENT_FANS_GET_OFFLINE_MESSAGE_RS __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  public commonpack.S_RS_HEAD sRsHead() { return sRsHead(new commonpack.S_RS_HEAD()); }
  public commonpack.S_RS_HEAD sRsHead(commonpack.S_RS_HEAD obj) { int o = __offset(4); return o != 0 ? obj.__assign(o + bb_pos, bb) : null; }
  public byte isFinish() { int o = __offset(6); return o != 0 ? bb.get(o + bb_pos) : 0; }
  public offcialpack.T_OFFCIAL_OFFLINE_MESSAGE listOffcialOfflineMsgResponse(int j) { return listOffcialOfflineMsgResponse(new offcialpack.T_OFFCIAL_OFFLINE_MESSAGE(), j); }
  public offcialpack.T_OFFCIAL_OFFLINE_MESSAGE listOffcialOfflineMsgResponse(offcialpack.T_OFFCIAL_OFFLINE_MESSAGE obj, int j) { int o = __offset(8); return o != 0 ? obj.__assign(__indirect(__vector(o) + j * 4), bb) : null; }
  public int listOffcialOfflineMsgResponseLength() { int o = __offset(8); return o != 0 ? __vector_len(o) : 0; }
  public offcialpack.T_OFFCIAL_MESSAGE listPrivateMsgResponse(int j) { return listPrivateMsgResponse(new offcialpack.T_OFFCIAL_MESSAGE(), j); }
  public offcialpack.T_OFFCIAL_MESSAGE listPrivateMsgResponse(offcialpack.T_OFFCIAL_MESSAGE obj, int j) { int o = __offset(10); return o != 0 ? obj.__assign(__indirect(__vector(o) + j * 4), bb) : null; }
  public int listPrivateMsgResponseLength() { int o = __offset(10); return o != 0 ? __vector_len(o) : 0; }

  public static void startT_CLIENT_FANS_GET_OFFLINE_MESSAGE_RS(FlatBufferBuilder builder) { builder.startObject(4); }
  public static void addSRsHead(FlatBufferBuilder builder, int sRsHeadOffset) { builder.addStruct(0, sRsHeadOffset, 0); }
  public static void addIsFinish(FlatBufferBuilder builder, byte isFinish) { builder.addByte(1, isFinish, 0); }
  public static void addListOffcialOfflineMsgResponse(FlatBufferBuilder builder, int listOffcialOfflineMsgResponseOffset) { builder.addOffset(2, listOffcialOfflineMsgResponseOffset, 0); }
  public static int createListOffcialOfflineMsgResponseVector(FlatBufferBuilder builder, int[] data) { builder.startVector(4, data.length, 4); for (int i = data.length - 1; i >= 0; i--) builder.addOffset(data[i]); return builder.endVector(); }
  public static void startListOffcialOfflineMsgResponseVector(FlatBufferBuilder builder, int numElems) { builder.startVector(4, numElems, 4); }
  public static void addListPrivateMsgResponse(FlatBufferBuilder builder, int listPrivateMsgResponseOffset) { builder.addOffset(3, listPrivateMsgResponseOffset, 0); }
  public static int createListPrivateMsgResponseVector(FlatBufferBuilder builder, int[] data) { builder.startVector(4, data.length, 4); for (int i = data.length - 1; i >= 0; i--) builder.addOffset(data[i]); return builder.endVector(); }
  public static void startListPrivateMsgResponseVector(FlatBufferBuilder builder, int numElems) { builder.startVector(4, numElems, 4); }
  public static int endT_CLIENT_FANS_GET_OFFLINE_MESSAGE_RS(FlatBufferBuilder builder) {
    int o = builder.endObject();
    return o;
  }
  public static void finishT_CLIENT_FANS_GET_OFFLINE_MESSAGE_RSBuffer(FlatBufferBuilder builder, int offset) { builder.finish(offset); }
}


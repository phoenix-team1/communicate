// automatically generated by the FlatBuffers compiler, do not modify

package ecpack;

import java.nio.*;
import java.lang.*;
import java.util.*;
import com.google.flatbuffers.*;

@SuppressWarnings("unused")
public final class T_EC_GETRECENTORDERS_RS extends Table {
  public static T_EC_GETRECENTORDERS_RS getRootAsT_EC_GETRECENTORDERS_RS(ByteBuffer _bb) { return getRootAsT_EC_GETRECENTORDERS_RS(_bb, new T_EC_GETRECENTORDERS_RS()); }
  public static T_EC_GETRECENTORDERS_RS getRootAsT_EC_GETRECENTORDERS_RS(ByteBuffer _bb, T_EC_GETRECENTORDERS_RS obj) { _bb.order(ByteOrder.LITTLE_ENDIAN); return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb)); }
  public void __init(int _i, ByteBuffer _bb) { bb_pos = _i; bb = _bb; }
  public T_EC_GETRECENTORDERS_RS __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  public commonpack.S_RS_HEAD sRsHead() { return sRsHead(new commonpack.S_RS_HEAD()); }
  public commonpack.S_RS_HEAD sRsHead(commonpack.S_RS_HEAD obj) { int o = __offset(4); return o != 0 ? obj.__assign(o + bb_pos, bb) : null; }
  public int code() { int o = __offset(6); return o != 0 ? bb.getInt(o + bb_pos) : 0; }
  public ecpack.T_ORDER_INFO orderList(int j) { return orderList(new ecpack.T_ORDER_INFO(), j); }
  public ecpack.T_ORDER_INFO orderList(ecpack.T_ORDER_INFO obj, int j) { int o = __offset(8); return o != 0 ? obj.__assign(__indirect(__vector(o) + j * 4), bb) : null; }
  public int orderListLength() { int o = __offset(8); return o != 0 ? __vector_len(o) : 0; }

  public static void startT_EC_GETRECENTORDERS_RS(FlatBufferBuilder builder) { builder.startObject(3); }
  public static void addSRsHead(FlatBufferBuilder builder, int sRsHeadOffset) { builder.addStruct(0, sRsHeadOffset, 0); }
  public static void addCode(FlatBufferBuilder builder, int code) { builder.addInt(1, code, 0); }
  public static void addOrderList(FlatBufferBuilder builder, int orderListOffset) { builder.addOffset(2, orderListOffset, 0); }
  public static int createOrderListVector(FlatBufferBuilder builder, int[] data) { builder.startVector(4, data.length, 4); for (int i = data.length - 1; i >= 0; i--) builder.addOffset(data[i]); return builder.endVector(); }
  public static void startOrderListVector(FlatBufferBuilder builder, int numElems) { builder.startVector(4, numElems, 4); }
  public static int endT_EC_GETRECENTORDERS_RS(FlatBufferBuilder builder) {
    int o = builder.endObject();
    return o;
  }
  public static void finishT_EC_GETRECENTORDERS_RSBuffer(FlatBufferBuilder builder, int offset) { builder.finish(offset); }
}


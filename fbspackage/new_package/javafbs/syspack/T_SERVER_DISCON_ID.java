// automatically generated by the FlatBuffers compiler, do not modify

package syspack;

import java.nio.*;
import java.lang.*;
import java.util.*;
import com.google.flatbuffers.*;

@SuppressWarnings("unused")
public final class T_SERVER_DISCON_ID extends Table {
  public static T_SERVER_DISCON_ID getRootAsT_SERVER_DISCON_ID(ByteBuffer _bb) { return getRootAsT_SERVER_DISCON_ID(_bb, new T_SERVER_DISCON_ID()); }
  public static T_SERVER_DISCON_ID getRootAsT_SERVER_DISCON_ID(ByteBuffer _bb, T_SERVER_DISCON_ID obj) { _bb.order(ByteOrder.LITTLE_ENDIAN); return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb)); }
  public void __init(int _i, ByteBuffer _bb) { bb_pos = _i; bb = _bb; }
  public T_SERVER_DISCON_ID __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  public int result() { int o = __offset(4); return o != 0 ? bb.getInt(o + bb_pos) : 0; }

  public static int createT_SERVER_DISCON_ID(FlatBufferBuilder builder,
      int result) {
    builder.startObject(1);
    T_SERVER_DISCON_ID.addResult(builder, result);
    return T_SERVER_DISCON_ID.endT_SERVER_DISCON_ID(builder);
  }

  public static void startT_SERVER_DISCON_ID(FlatBufferBuilder builder) { builder.startObject(1); }
  public static void addResult(FlatBufferBuilder builder, int result) { builder.addInt(0, result, 0); }
  public static int endT_SERVER_DISCON_ID(FlatBufferBuilder builder) {
    int o = builder.endObject();
    return o;
  }
  public static void finishT_SERVER_DISCON_IDBuffer(FlatBufferBuilder builder, int offset) { builder.finish(offset); }
}


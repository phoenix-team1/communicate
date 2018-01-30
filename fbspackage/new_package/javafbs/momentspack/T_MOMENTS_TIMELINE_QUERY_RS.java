// automatically generated by the FlatBuffers compiler, do not modify

package momentspack;

import java.nio.*;
import java.lang.*;
import java.util.*;
import com.google.flatbuffers.*;

@SuppressWarnings("unused")
public final class T_MOMENTS_TIMELINE_QUERY_RS extends Table {
  public static T_MOMENTS_TIMELINE_QUERY_RS getRootAsT_MOMENTS_TIMELINE_QUERY_RS(ByteBuffer _bb) { return getRootAsT_MOMENTS_TIMELINE_QUERY_RS(_bb, new T_MOMENTS_TIMELINE_QUERY_RS()); }
  public static T_MOMENTS_TIMELINE_QUERY_RS getRootAsT_MOMENTS_TIMELINE_QUERY_RS(ByteBuffer _bb, T_MOMENTS_TIMELINE_QUERY_RS obj) { _bb.order(ByteOrder.LITTLE_ENDIAN); return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb)); }
  public void __init(int _i, ByteBuffer _bb) { bb_pos = _i; bb = _bb; }
  public T_MOMENTS_TIMELINE_QUERY_RS __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  public commonpack.S_RS_HEAD sRsHead() { return sRsHead(new commonpack.S_RS_HEAD()); }
  public commonpack.S_RS_HEAD sRsHead(commonpack.S_RS_HEAD obj) { int o = __offset(4); return o != 0 ? obj.__assign(o + bb_pos, bb) : null; }
  public momentspack.T_TIMELINE_DTO timelines(int j) { return timelines(new momentspack.T_TIMELINE_DTO(), j); }
  public momentspack.T_TIMELINE_DTO timelines(momentspack.T_TIMELINE_DTO obj, int j) { int o = __offset(6); return o != 0 ? obj.__assign(__indirect(__vector(o) + j * 4), bb) : null; }
  public int timelinesLength() { int o = __offset(6); return o != 0 ? __vector_len(o) : 0; }

  public static void startT_MOMENTS_TIMELINE_QUERY_RS(FlatBufferBuilder builder) { builder.startObject(2); }
  public static void addSRsHead(FlatBufferBuilder builder, int sRsHeadOffset) { builder.addStruct(0, sRsHeadOffset, 0); }
  public static void addTimelines(FlatBufferBuilder builder, int timelinesOffset) { builder.addOffset(1, timelinesOffset, 0); }
  public static int createTimelinesVector(FlatBufferBuilder builder, int[] data) { builder.startVector(4, data.length, 4); for (int i = data.length - 1; i >= 0; i--) builder.addOffset(data[i]); return builder.endVector(); }
  public static void startTimelinesVector(FlatBufferBuilder builder, int numElems) { builder.startVector(4, numElems, 4); }
  public static int endT_MOMENTS_TIMELINE_QUERY_RS(FlatBufferBuilder builder) {
    int o = builder.endObject();
    return o;
  }
  public static void finishT_MOMENTS_TIMELINE_QUERY_RSBuffer(FlatBufferBuilder builder, int offset) { builder.finish(offset); }
}


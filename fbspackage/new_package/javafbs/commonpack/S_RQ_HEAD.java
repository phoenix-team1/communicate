// automatically generated by the FlatBuffers compiler, do not modify

package commonpack;

import java.nio.*;
import java.lang.*;
import java.util.*;
import com.google.flatbuffers.*;

@SuppressWarnings("unused")
public final class S_RQ_HEAD extends Struct {
  public void __init(int _i, ByteBuffer _bb) { bb_pos = _i; bb = _bb; }
  public S_RQ_HEAD __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  public long userId() { return bb.getLong(bb_pos + 0); }
  public int packSessionId() { return bb.getInt(bb_pos + 8); }
  public byte platform() { return bb.get(bb_pos + 12); }

  public static int createS_RQ_HEAD(FlatBufferBuilder builder, long userId, int packSessionId, byte platform) {
    builder.prep(8, 16);
    builder.pad(3);
    builder.putByte(platform);
    builder.putInt(packSessionId);
    builder.putLong(userId);
    return builder.offset();
  }
}

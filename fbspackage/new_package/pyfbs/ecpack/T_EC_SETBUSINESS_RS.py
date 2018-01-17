# automatically generated by the FlatBuffers compiler, do not modify

# namespace: ecpack

import flatbuffers

class T_EC_SETBUSINESS_RS(object):
    __slots__ = ['_tab']

    @classmethod
    def GetRootAsT_EC_SETBUSINESS_RS(cls, buf, offset):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, offset)
        x = T_EC_SETBUSINESS_RS()
        x.Init(buf, n + offset)
        return x

    # T_EC_SETBUSINESS_RS
    def Init(self, buf, pos):
        self._tab = flatbuffers.table.Table(buf, pos)

    # T_EC_SETBUSINESS_RS
    def SRsHead(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            x = o + self._tab.Pos
            from .S_RS_HEAD import S_RS_HEAD
            obj = S_RS_HEAD()
            obj.Init(self._tab.Bytes, x)
            return obj
        return None

    # T_EC_SETBUSINESS_RS
    def SellerId(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(6))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Uint64Flags, o + self._tab.Pos)
        return 0

def T_EC_SETBUSINESS_RSStart(builder): builder.StartObject(2)
def T_EC_SETBUSINESS_RSAddSRsHead(builder, sRsHead): builder.PrependStructSlot(0, flatbuffers.number_types.UOffsetTFlags.py_type(sRsHead), 0)
def T_EC_SETBUSINESS_RSAddSellerId(builder, sellerId): builder.PrependUint64Slot(1, sellerId, 0)
def T_EC_SETBUSINESS_RSEnd(builder): return builder.EndObject()
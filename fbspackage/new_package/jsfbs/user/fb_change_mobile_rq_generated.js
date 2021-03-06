// automatically generated by the FlatBuffers compiler, do not modify

/**
 * @const
 * @namespace
 */
var commonpack = commonpack || {};

/**
 * @const
 * @namespace
 */
var userpack = userpack || {};

/**
 * @constructor
 */
userpack.T_CHANGE_MOBILE_RQ = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {userpack.T_CHANGE_MOBILE_RQ}
 */
userpack.T_CHANGE_MOBILE_RQ.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {userpack.T_CHANGE_MOBILE_RQ=} obj
 * @returns {userpack.T_CHANGE_MOBILE_RQ}
 */
userpack.T_CHANGE_MOBILE_RQ.getRootAsT_CHANGE_MOBILE_RQ = function(bb, obj) {
  return (obj || new userpack.T_CHANGE_MOBILE_RQ).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {commonpack.S_RQ_HEAD=} obj
 * @returns {commonpack.S_RQ_HEAD}
 */
userpack.T_CHANGE_MOBILE_RQ.prototype.sRqHead = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? (obj || new commonpack.S_RQ_HEAD).__init(this.bb_pos + offset, this.bb) : null;
};

/**
 * @returns {flatbuffers.Long}
 */
userpack.T_CHANGE_MOBILE_RQ.prototype.oldMoblie = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.readUint64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @returns {flatbuffers.Long}
 */
userpack.T_CHANGE_MOBILE_RQ.prototype.newMoblie = function() {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? this.bb.readUint64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 */
userpack.T_CHANGE_MOBILE_RQ.startT_CHANGE_MOBILE_RQ = function(builder) {
  builder.startObject(3);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} sRqHeadOffset
 */
userpack.T_CHANGE_MOBILE_RQ.addSRqHead = function(builder, sRqHeadOffset) {
  builder.addFieldStruct(0, sRqHeadOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} oldMoblie
 */
userpack.T_CHANGE_MOBILE_RQ.addOldMoblie = function(builder, oldMoblie) {
  builder.addFieldInt64(1, oldMoblie, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} newMoblie
 */
userpack.T_CHANGE_MOBILE_RQ.addNewMoblie = function(builder, newMoblie) {
  builder.addFieldInt64(2, newMoblie, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
userpack.T_CHANGE_MOBILE_RQ.endT_CHANGE_MOBILE_RQ = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
userpack.T_CHANGE_MOBILE_RQ.finishT_CHANGE_MOBILE_RQBuffer = function(builder, offset) {
  builder.finish(offset);
};

// Exports for Node.js and RequireJS
this.commonpack = commonpack;
this.userpack = userpack;
